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

  const [selectedMonth, setSelectedMonth] = useState("January");

  // Find crops that can be sown in the selected month
  const cropsForMonth = crops.filter((crop) =>
    crop.varieties.some((variety) =>
      variety.sowingMonths.includes(selectedMonth)
    )
  );

  return (
    <main className="page">

      {/* Header */}

      <section className="page-header">
        <h1>Crop Calendar</h1>

        <p>
          Find crops and their varieties that can be
          sown during a particular month.
        </p>
      </section>


      {/* Month Selection */}

      <section className="calendar-selection">

        <h2>Select Month</h2>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

      </section>


      {/* Crops */}

      <section className="calendar-results">

        <h2>
          Crops that can be sown in {selectedMonth}
        </h2>

        {cropsForMonth.length > 0 ? (

          <div className="crop-grid">

            {cropsForMonth.map((crop) => {

              // Find only varieties that can be sown this month
              const suitableVarieties = crop.varieties.filter(
                (variety) =>
                  variety.sowingMonths.includes(selectedMonth)
              );

              return (
                <article
                  className="crop-card"
                  key={crop.id}
                >

                  <h3>{crop.name}</h3>

                  <p>{crop.description}</p>

                  <h4>Available Varieties</h4>

                  <ul>
                    {suitableVarieties.map((variety) => (
                      <li key={variety.id}>
                        {variety.name}
                      </li>
                    ))}
                  </ul>

                  <Link to={`/crops/${crop.id}`}>
                    View Crop Details →
                  </Link>

                </article>
              );
            })}

          </div>

        ) : (

          <p>
            No crop information is available for {selectedMonth}.
          </p>

        )}

      </section>

    </main>
  );
}

export default CropCalendar;