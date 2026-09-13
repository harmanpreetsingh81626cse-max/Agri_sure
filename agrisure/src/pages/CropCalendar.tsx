import { useState } from "react";
import { Link } from "react-router-dom";
import { crops } from "../data/crops";

function CropCalendar() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const currentMonth = new Date().toLocaleString(
    "en-US",
    {
      month: "long"
    }
  );

  const [selectedMonth, setSelectedMonth] =
    useState(currentMonth);

  const cropsForMonth = crops.filter(
    (crop) =>
      crop.varieties.some((variety) =>
        variety.sowingMonths.includes(
          selectedMonth
        )
      )
  );

  return (
    <main className="page">

      <section className="page-header">

        <span>
          SMART SOWING GUIDE
        </span>

        <h1>
          Crop Calendar
        </h1>

        <p>
          Find crops and varieties that can be
          sown during a particular month.
        </p>

      </section>

      <section className="calendar-top">

        <div>

          <span>
            CURRENT MONTH
          </span>

          <h2>
            {currentMonth}
          </h2>

          <p>
            The calendar automatically starts
            with the current month.
          </p>

        </div>

        <div className="calendar-icon">
          📅
        </div>

      </section>

      <section className="calendar-selection">

        <label htmlFor="month">
          Select Month
        </label>

        <select
          id="month"
          value={selectedMonth}
          onChange={(e) =>
            setSelectedMonth(e.target.value)
          }
        >

          {months.map((month) => (

            <option
              key={month}
              value={month}
            >
              {month}
            </option>

          ))}

        </select>

      </section>

      <section className="crop-section">

        <div className="section-heading">

          <span>
            SOWING GUIDE
          </span>

          <h2>
            Crops for {selectedMonth}
          </h2>

        </div>

        {cropsForMonth.length > 0 ? (

          <div className="crop-grid">

            {cropsForMonth.map((crop) => {

              const suitableVarieties =
                crop.varieties.filter(
                  (variety) =>
                    variety.sowingMonths.includes(
                      selectedMonth
                    )
                );

              return (
                <article
                  className="calendar-crop-card"
                  key={crop.id}
                >

                  <div className="calendar-crop-image">

                    <img
                      src={crop.image}
                      alt={crop.name}
                    />

                  </div>

                  <div className="calendar-crop-content">

                    <span>
                      {selectedMonth}
                    </span>

                    <h3>
                      {crop.name}
                    </h3>

                    <p>
                      Varieties suitable for sowing:
                    </p>

                    <div className="variety-tags">

                      {suitableVarieties.map(
                        (variety) => (
                          <span key={variety.id}>
                            {variety.name}
                          </span>
                        )
                      )}

                    </div>

                    <Link
                      to={`/crops/${crop.id}`}
                    >
                      View Crop Details →
                    </Link>

                  </div>

                </article>
              );
            })}

          </div>

        ) : (

          <div className="empty-state">

            <span>📅</span>

            <h2>
              No crop information available
            </h2>

            <p>
              We don't currently have sowing
              information for {selectedMonth}.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default CropCalendar;