// AJAX Function 
function fetchPokemonData(pokemonName, ynShiny) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    $.ajax({        //AJAX request
        url: apiUrl,
        method: "GET",
        success: function (data) {
            if (ynShiny) {
                displayShinyPokemonData(data);
            } else {
                displayPokemonData(data);
            }
        },
        error: function () {
            $('#pokemon-info').text("Failed to fetch Pokémon data. Please try again.");
        }
    });
}

// Display Normal pokemon
function displayPokemonData(data) {
    $("#pokemon-info").html(`
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
    `);
}

// Display Shiny pokemon
function displayShinyPokemonData(data) {
    $("#pokemon-info").html(`
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_shiny}" alt="${data.name}">
    `);
}

// Document is ready
document.addEventListener("DOMContentLoaded", function () {
    // Default pokemon
    fetchPokemonData("empoleon", false);

    // Event Listener for Submit Button
    const pokeSearch = document.getElementById("pokeSearch");
    pokeSearch.addEventListener("submit", function (event) {
        event.preventDefault();
        const pokemonName = document.getElementById("pokemon-name").value.trim().toLowerCase();
        if (pokemonName) {
            fetchPokemonData(pokemonName, false);
        }
    });

    // Event Listener for Shiny Button
    const shinyButton = document.getElementById("shiny-button");
    shinyButton.addEventListener("click", function () {
        const pokemonName = document.getElementById("pokemon-name").value.trim().toLowerCase();
        if (pokemonName) {
            fetchPokemonData(pokemonName, true);
        }
    });
});
