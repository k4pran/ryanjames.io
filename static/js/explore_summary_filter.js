exploreSummaries = new Set();
series = new Set();
years = new Set();

$(document).ready(function(){
    $('.explore-gallery-element').each(function(){
        exploreSummaries.add($(this));
    });
});

$(document).ready(function(){
    $('.explore_summary_series').each(function(){
        series.add($(this).text());
    });
});

$(document).ready(function(){
    $('.explore_summary_year').each(function(){
         years.add($(this).text());
    });
});

$('.explore_summary_series').click(function() {
    let seriesText = $(this).text();
    if (series.has(seriesText)) {
        series.delete(seriesText);
    }
    else {
        series.add(seriesText);
    }
    updateSummarySeriesList();
    updateSummaries();
});

$('.explore_summary_year').click(function() {
    let yearText = $(this).text();
    if (years.has(yearText)) {
        years.delete(yearText);
    }
    else {
        years.add(yearText);
    }
    updateSummaryYearsList();
    updateSummaries();
});

function updateSummarySeriesList() {
    $('.explore_summary_series').each(function(){
        let seriesText = $(this).text();
        $(this).toggleClass("sidebar-item-enabled", series.has(seriesText))
        $(this).toggleClass("sidebar-item-disabled", !series.has(seriesText))
    });
}

function updateSummaryYearsList() {
    $('.explore_summary_year').each(function(){
        let yearText = $(this).text();
        $(this).toggleClass("sidebar-item-enabled", years.has(yearText))
        $(this).toggleClass("sidebar-item-disabled", !years.has(yearText))
    });
}

function updateSummaries() {
    exploreSummaries.forEach(element => {
        let year = element.data("year").toString();
        let singleSeries = element.data("series");
        console.log(year)

        if (years.has(year) && series.has(singleSeries)) {
            element.show();
        } else {
            element.hide();
        }
    });
}