const modal = document.getElementById('buyModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalStatus = document.getElementById('modalStatus');
const modalPrice = document.getElementById('modalPrice');
const durationInput = document.getElementById('duration');

const products = {
    'Aimbot🎯': {
        description: 'SimpleAimbot With On/Off + Panel Hide',
        status: 'All-Server-Safe✔️',
        basePrice: 1.79
    },
    'FemaleFixAimbot🎯': {
        description: 'Rage Aimbot + Panel Hide',
        status: 'Ind-Server-Safe✔️',
        basePrice: 1.79
    },
    'SniperAimbot🎯': {
        description: 'Aimbot+Fast Switch+ Panel Hide',
        status: 'All-Server-Safe✔️',
        basePrice: 1.79
    },
    'Brutal👑': {
        description: 'Fast Speed+Fast Fire+Emulator Bypass',
        status: 'Blacklist-Issue-in-pk/Ind-Server-Safe✔️',
        basePrice: 1.79
    },
    'Location👁️': {
        description: '3D-Location of enemies',
        status: 'All-Server-Safe✔️',
        basePrice: 0.90
    }
};

let currentProduct = '';

function openBuyModal(productName) {
    currentProduct = productName;
    const product = products[productName];
    modalTitle.textContent = productName;
    modalDescription.textContent = product.description;
    modalStatus.textContent = product.status;
    durationInput.value = 15;
    updatePrice();
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

function updatePrice() {
    const product = products[currentProduct];
    const days = parseInt(durationInput.value);
    const price = (product.basePrice * days / 15).toFixed(2);
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
    const product = products[currentProduct];
    const days = parseInt(durationInput.value);
    const price = (product.basePrice * days / 15).toFixed(2);
    alert(`Order: ${currentProduct}\nDuration: ${days} days\nPrice: $${price}\n\nRedirecting to Discord...`);
    window.open('https://discord.gg/CstwWEXeZF', '_blank');
    closeModal();
}

function redirectToWhatsapp() {
    const product = products[currentProduct];
    const days = parseInt(durationInput.value);
    const price = (product.basePrice * days / 15).toFixed(2);
    const message = `${currentProduct} ${days} days price $${price}`;
    window.open(`https://wa.me/923278647470?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
}

document.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeFreePanelsModal();
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
    window.open('https://www.youtube.com/@FireHawkPanel', '_blank');
    isSubscribed = true;
    document.getElementById('unlockBtn').classList.remove('locked');
    document.getElementById('unlockBtn').disabled = false;
}

function checkSubscription() {
    if (!isSubscribed) {
        alert('Please subscribe to our YouTube channel first!');
        return;
    }
    document.getElementById('freePanelsTitle').textContent = '✅ Panel Unlocked!';
    document.getElementById('freePanelsDescription').textContent = 'Thank you for subscribing! Your free panel is ready to download.';
    document.getElementById('youtubeIframe').style.display = 'none';
    document.querySelector('.subscribe-btn').style.display = 'none';
    document.getElementById('unlockSuccess').style.display = 'block';
}