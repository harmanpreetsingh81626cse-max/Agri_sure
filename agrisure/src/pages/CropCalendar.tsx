import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import BookmarkButton from "../components/BookmarkButton";
import Loading from "../components/Loading";
import Button from "../components/Button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCrops } from "../store/cropsSlice";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function CropCalendar() {
  const dispatch = useAppDispatch();
  const { items: crops, status, error } = useAppSelector((state) => state.crops);

  const currentMonth = months[new Date().getMonth()];
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCrops());
    }
  }, [dispatch, status]);

  // crops that have at least one variety sown in the selected month
  const cropsForMonth = crops
    .map((crop) => ({
      crop,
      varieties: crop.varieties.filter((variety) =>
        variety.sowingMonths.includes(selectedMonth)
      ),
    }))
    .filter((item) => item.varieties.length > 0);

  return (
    <main className="page">
      <section className="page-header">
        <span className="tag">Sowing guide</span>
        <h1>Crop Calendar</h1>
        <p>Find crops and varieties that can be sown in a particular month.</p>
      </section>

      <section className="filters center">
        <div className="select-wrap">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            aria-label="Select month"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month === currentMonth ? `${month} (current)` : month}
              </option>
            ))}
          </select>
          <ChevronDown size={18} />
        </div>
      </section>

      {status === "loading" && <Loading />}

      {status === "failed" && (
        <div className="empty-state" role="alert">
          <h2>Couldn't load crops</h2>
          <p>{error}</p>
          <Button onClick={() => dispatch(fetchCrops())}>Try again</Button>
        </div>
      )}

      {status === "succeeded" && (
        <>
          <p className="result-count">
            <strong>{cropsForMonth.length}</strong> crops can be sown in{" "}
            <strong>{selectedMonth}</strong>
          </p>

          {cropsForMonth.length > 0 ? (
            <section className="crop-grid">
              {cropsForMonth.map(({ crop, varieties }) => (
                <article className="crop-card" key={crop.id}>
                  <div className="card-image-box">
                    <img src={crop.image} alt={crop.name} className="card-image" />
                    <BookmarkButton cropId={crop.id} cropName={crop.name} />
                  </div>

                  <div className="card-body">
                    <span className="month-pill">
                      <CalendarDays size={14} /> Sow in {selectedMonth}
                    </span>
                    <h3>{crop.name}</h3>
                    <p className="small-label">Varieties suitable for sowing</p>

                    <div className="card-stats">
                      {varieties.map((variety) => (
                        <span key={variety.id}>{variety.name}</span>
                      ))}
                    </div>

                    <Link to={`/crops/${crop.id}`} className="card-link">
                      View crop <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </section>
          ) : (
            <div className="empty-state">
              <h2>Nothing to sow</h2>
              <p>No crops are listed for {selectedMonth}. Try another month.</p>
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default CropCalendar;