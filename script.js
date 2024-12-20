// Data: Tourist places by month, budget, and recommended days
const touristPlaces = {
    January: [
        { name: "Kodaikanal", budget: "medium", days: 3 },
        { name: "Ooty", budget: "low", days: 2 },
        { name: "Luxury Hill Resort", budget: "high", days: 5 }
    ],
    February: [
        { name: "Rameswaram", budget: "low", days: 2 },
        { name: "Mahabalipuram", budget: "medium", days: 3 },
        { name: "Premium Beach Resort", budget: "high", days: 5 }
    ],
    March: [
        { name: "Yercaud", budget: "low", days: 2 },
        { name: "Velankanni", budget: "medium", days: 3 },
        { name: "Luxury Spa Retreat", budget: "high", days: 5 }
    ],
    April: [
        { name: "Kanyakumari", budget: "low", days: 2 },
        { name: "Hogenakkal Falls", budget: "medium", days: 3 },
        { name: "Luxury Mountain Villas", budget: "high", days: 5 }
    ],
    May: [
        { name: "Yelagiri", budget: "low", days: 2 },
        { name: "Mudumalai National Park", budget: "medium", days: 3 },
        { name: "Premium Safari Lodges", budget: "high", days: 5 }
    ],
    June: [
        { name: "Coonoor", budget: "low", days: 2 },
        { name: "Yercaud", budget: "medium", days: 3 },
        { name: "Exclusive Plantation Retreat", budget: "high", days: 5 }
    ],
    July: [
        { name: "Kolli Hills", budget: "low", days: 2 },
        { name: "Munnar (near TN border)", budget: "medium", days: 3 },
        { name: "Luxury Heritage Stay", budget: "high", days: 5 }
    ],
    August: [
        { name: "Rameswaram", budget: "low", days: 2 },
        { name: "Chennai Marina Beach", budget: "medium", days: 3 },
        { name: "Exclusive Beach Resorts", budget: "high", days: 5 }
    ],
    September: [
        { name: "Ooty", budget: "low", days: 2 },
        { name: "Kodaikanal", budget: "medium", days: 3 },
        { name: "Luxury Hilltop Resort", budget: "high", days: 5 }
    ],
    October: [
        { name: "Kanyakumari", budget: "low", days: 2 },
        { name: "Mahabalipuram", budget: "medium", days: 3 },
        { name: "Premium Coastal Retreat", budget: "high", days: 5 }
    ],
    November: [
        { name: "Rameswaram", budget: "low", days: 2 },
        { name: "Velankanni", budget: "medium", days: 3 },
        { name: "Luxury Cultural Tour", budget: "high", days: 5 }
    ],
    December: [
        { name: "Chennai", budget: "low", days: 2 },
        { name: "Ooty", budget: "medium", days: 3 },
        { name: "Exclusive Winter Getaway", budget: "high", days: 5 }
    ]
};

// Function to get recommendations
function getRecommendations() {
    const monthSelect = document.getElementById("month-select");
    const budgetSelect = document.getElementById("budget-select");
    const startDate = document.getElementById("start-date");
    const endDate = document.getElementById("end-date");
    const recommendationsDiv = document.getElementById("recommendations");

    const selectedMonth = monthSelect.value;
    const selectedBudget = budgetSelect.value;
    const selectedStartDate = startDate.value;
    const selectedEndDate = endDate.value;

    recommendationsDiv.innerHTML = ""; // Clear previous results

    // Validate inputs
    if (!selectedMonth || !selectedBudget || !selectedStartDate || !selectedEndDate) {
        recommendationsDiv.innerHTML = "<p>Please select all the options.</p>";
        return;
    }

    const places = touristPlaces[selectedMonth] || [];
    const filteredPlaces = places.filter(place => place.budget === selectedBudget);

    if (filteredPlaces.length > 0) {
        recommendationsDiv.innerHTML = `<h2>Places to visit in ${selectedMonth}:</h2>`;
        filteredPlaces.forEach(place => {
            const placeDiv = document.createElement("div");
            placeDiv.className = "place";
            placeDiv.textContent = place.name;  // Only show the place name
            recommendationsDiv.appendChild(placeDiv);
        });
    } else {
        recommendationsDiv.innerHTML = `<p>No places found for the selected criteria in ${selectedMonth}.</p>`;
    }
}
