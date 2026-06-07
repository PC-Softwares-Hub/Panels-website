const modal = document.getElementById('buyModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalStatus = document.getElementById('modalStatus');
const modalPrice = document.getElementById('modalPrice');
const durationInput = document.getElementById('duration');

let currentProduct = '';
let currentBasePrice = 1.79;

function openBuyModal(productName, description, basePrice) {
    currentProduct = productName;
    currentBasePrice = parseFloat(basePrice);
    modalTitle.textContent = productName;
    modalDescription.innerHTML = description.replace(/\n/g, '<br>');
    modalStatus.textContent = '';
    durationInput.value = 15;
    updatePrice();
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

function updatePrice() {
    const days = parseInt(durationInput.value);
    const price = (currentBasePrice * days / 15).toFixed(2);
    modalPrice.textContent = `$${price}`;
}

function decrementDuration() {
    const current = parseInt(durationInput.value);
    if (current > 15) {
        durationInput.value = current - 1;
        updatePrice();
    }
}

function incrementDuration() {
    const current = parseInt(durationInput.value);
    if (current < 90) {
        durationInput.value = current + 1;
        updatePrice();
    }
}

function redirectToDiscord() {
    const days = parseInt(durationInput.value);
    const price = (currentBasePrice * days / 15).toFixed(2);
    alert(`Order: ${currentProduct}\nDuration: ${days} days\nPrice: $${price}\n\nRedirecting to Discord...`);
    window.open('https://discord.gg/CstwWEXeZF', '_blank');
    closeModal();
}

function redirectToWhatsapp() {
    const days = parseInt(durationInput.value);
    const price = (currentBasePrice * days / 15).toFixed(2);
    const message = `${currentProduct} ${days} days price $${price}`;
    window.open(`https://wa.me/923278647470?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
}

function openContactModal() {
    document.getElementById('contactModal').style.display = 'flex';
}

function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
}

function openLivewallpaperModal() {
    document.getElementById('livewallpaperModal').style.display = 'flex';
}

function closeLivewallpaperModal() {
    document.getElementById('livewallpaperModal').style.display = 'none';
}

document.addEventListener('click', function(e) {
    if (e.target === modal || e.target === document.getElementById('setupModal') || e.target === document.getElementById('contactModal') || e.target === document.getElementById('livewallpaperModal')) {
        closeModal();
        closeSetupModal();
        closeContactModal();
        closeLivewallpaperModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeFreePanelsModal();
        closeSetupModal();
        closeContactModal();
        closeLivewallpaperModal();
    }
});

let isSubscribed = false;

function openFreePanelsModal() {
    document.getElementById('freePanelsModal').style.display = 'flex';
    document.getElementById('unlockSuccess').style.display = 'none';
    document.getElementById('unlockBtn').classList.add('locked');
    document.getElementById('unlockBtn').disabled = true;
    isSubscribed = false;
}

function closeFreePanelsModal() {
    document.getElementById('freePanelsModal').style.display = 'none';
}

function openYouTubeChannel() {
    isSubscribed = true;
    document.getElementById('unlockBtn').classList.remove('locked');
    document.getElementById('unlockBtn').disabled = false;
}

function handleYouTubeClick() {
    setTimeout(openYouTubeChannel, 500);
}

function checkSubscription() {
    if (!isSubscribed) {
        alert('Please subscribe to our YouTube channel first!');
        return;
    }
    document.getElementById('unlockSuccess').style.display = 'block';
    document.getElementById('unlockBtn').disabled = true;
}

function openSetupModal() {
    document.getElementById('setupModal').style.display = 'flex';
}

function closeSetupModal() {
    document.getElementById('setupModal').style.display = 'none';
}