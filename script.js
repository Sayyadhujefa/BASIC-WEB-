 
 // Update cart and wishlist counts on page load
 document.addEventListener('DOMContentLoaded', () => {
    updateCounts();
});

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product + ' has been added to your cart.');
    updateCounts();
}

function addToWishlist(product) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(product + ' has been added to your wishlist.');
    updateCounts();
}

function updateCounts() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('wishlist-count').textContent = wishlist.length;
}

function showCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
    document.getElementById('cart').style.display = 'block';
    document.getElementById('wishlist').style.display = 'none';
}

function showWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let wishlistItems = document.getElementById('wishlist-items');
    wishlistItems.innerHTML = '';
    wishlist.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        wishlistItems.appendChild(li);
    });
    document.getElementById('wishlist').style.display = 'block';
    document.getElementById('cart').style.display = 'none';
}
document.getElementById('submitReview').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const reviewText = document.getElementById('review').value;
    
    // Create new review element
    const review = document.createElement('div');
    review.classList.add('review');
    
    const reviewHeader = document.createElement('div');
    reviewHeader.classList.add('review-header');
    
    const reviewerName = document.createElement('span');
    reviewerName.classList.add('reviewer-name');
    reviewerName.textContent = name;
    
    const reviewDate = document.createElement('span');
    reviewDate.classList.add('review-date');
    const currentDate = new Date();
    reviewDate.textContent = currentDate.toLocaleDateString();
    
    const reviewRating = document.createElement('div');
    reviewRating.classList.add('review-rating');
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.textContent = '★';
        if (i < rating) {
            star.classList.add('filled');
        }
        reviewRating.appendChild(star);
    }
    
    reviewHeader.appendChild(reviewerName);
    reviewHeader.appendChild(reviewDate);
    reviewHeader.appendChild(reviewRating);
    
    const reviewBody = document.createElement('div');
    reviewBody.classList.add('review-body');
    const reviewParagraph = document.createElement('p');
    reviewParagraph.textContent = reviewText;
    reviewBody.appendChild(review)
})

document.getElementById("submitReview").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    const reviewText = document.getElementById("review").value;

    if (name && rating && reviewText) {
        const newReview = `
            <div class="review">
                <div class="review-header">
                    <span class="reviewer-name">${name}</span>
                    <span class="review-date">${new Date().toDateString()}</span>
                    <div class="review-rating">
                        ${'★'.repeat(rating)}${'★'.repeat(5 - rating)}
                    </div>
                </div>
                <div class="review-body">
                    <p>${reviewText}</p>
                </div>
            </div>
        `;
        document.querySelector(".reviews").innerHTML += newReview;
        document.getElementById("submitReview").reset();
        alert("Thanks for your review!");
    }
});


 
