const cityData = {
  "Nashville, TN": {
    "name": "Nashville, TN",
    "best_deal": {
      "address": "264 38th Ave N, Nashville, TN 37209",
      "price": 425000,
      "cashFlow": 2401,
      "bedrooms": 3,
      "bathrooms": 1,
      "sqft": 912,
      "images": [
        "/static/images/properties/Nashville_TN_41127862_0.jpg",
        "/static/images/properties/Nashville_TN_41127862_1.jpg"
      ],
      "zillowLink": "https://www.zillow.com/homedetails/41127862_zpid/"
    }
  },
  "Knoxville, TN": {
    "name": "Knoxville, TN",
    "best_deal": {
      "address": "12739 Early Woods Ln, Knoxville, TN 37922",
      "price": 589900,
      "cashFlow": 1795,
      "bedrooms": 3,
      "bathrooms": 3,
      "sqft": 2627,
      "images": [
        "/static/images/properties/Knoxville_TN_67379892_0.jpg",
        "/static/images/properties/Knoxville_TN_67379892_1.jpg",
        "/static/images/properties/Knoxville_TN_67379892_2.jpg",
        "/static/images/properties/Knoxville_TN_67379892_3.jpg",
        "/static/images/properties/Knoxville_TN_67379892_4.jpg"
      ],
      "zillowLink": "https://www.zillow.com/homedetails/67379892_zpid/"
    }
  }
};









function populateFeaturedProperties() {
    const featuredProperties = document.getElementById('featured-properties');
    if (featuredProperties && Object.keys(cityData).length > 0) {
        featuredProperties.innerHTML = '';  // Clear existing content
        for (const [city, data] of Object.entries(cityData)) {
            const bestDeal = data.best_deal;
            let imagesHtml = '';
            if (bestDeal.images && bestDeal.images.length > 0) {
                imagesHtml = `
                    <div class="image-gallery">
                        ${bestDeal.images.map((image, index) => `
                            <img src="${image}" alt="${city} property image ${index + 1}" class="gallery-image ${index === 0