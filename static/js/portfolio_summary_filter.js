portfolioSummaries = new Set();
categories = new Set();
years = new Set();

$(document).ready(function(){
    $('.project-preview-box').each(function(){
        portfolioSummaries.add($(this));
    });
});

$(document).ready(function(){
    $('.portfolio_summary_category').each(function(){
        categories.add($(this).text());
    });
});

$(document).ready(function(){
    $('.portfolio_summary_year').each(function(){
         years.add($(this).text());
    });
});

$('.explore_summary_series').click(function() {
    let categoryText = $(this).text();
    if (categories.has(categoryText)) {
        categories.delete(categoryText);
    }
    else {
        categories.add(categoryText);
    }
    updateSummaryCategoriesList();
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

function updateSummaryCategoriesList() {
    $('.portfolio_summary_category').each(function(){
        let categoriesText = $(this).text();
        $(this).toggleClass("sidebar-item-enabled", categories.has(categoriesText))
        $(this).toggleClass("sidebar-item-disabled", !categories.has(categoriesText))
    });
}

function updateSummaryYearsList() {
    $('.portfolio_summary_year').each(function(){
        let yearText = $(this).text();
        $(this).toggleClass("sidebar-item-enabled", years.has(yearText))
        $(this).toggleClass("sidebar-item-disabled", !years.has(yearText))
    });
}

function updateSummaries() {
    portfolioSummaries.forEach(element => {
        let year = element.data("year").toString();
        let singleCategory = element.data("category");

        if (years.has(year) && categories.has(singleCategory)) {
            element.show();
        } else {
            element.hide();
        }
    });
}