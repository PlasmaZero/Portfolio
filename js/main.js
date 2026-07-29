// Daniel Zhou Portfolio - Main JS
// Clean external JS for enhanced interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Additional enhancements beyond inline script
    initProjectHoverEffects();
    initScrollProgress();
    initFilterKeyboardShortcuts();
    console.log('%c[Portfolio] External JS enhancements loaded.', 'color:#64748b');
});

function initProjectHoverEffects() {
    const cards = document.querySelectorAll('#projects-grid .project-card');
    
    cards.forEach(card => {
        // Add subtle tilt effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            const rotateX = (50 - y) / 12;
            const rotateY = (x - 50) / 14;
            
            card.style.transition = 'transform 0.1s ease';
            card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease';
            card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
        });
        
        // Add data on hover for trading flavor
        card.addEventListener('mouseenter', () => {
            const header = card.querySelector('h3');
            if (header && !header.dataset.original) {
                header.dataset.original = header.textContent;
            }
        });
    });
}

function initScrollProgress() {
    // Add a very subtle scroll progress indicator on the navbar
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = 'position:absolute;bottom:0;left:0;height:1.5px;background:linear-gradient(to right,#14b8a6,#67e8f9);transition:width .08s linear;width:0;z-index:10;';
    nav.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${scrollPercent}%`;
    }, { passive: true });
}

function initFilterKeyboardShortcuts() {
    // Keyboard shortcuts for project filters
    document.addEventListener('keydown', (e) => {
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
        
        const grid = document.getElementById('projects-grid');
        if (!grid) return;
        
        if (e.key.toLowerCase() === 'p') {
            e.preventDefault();
            const btn = document.getElementById('filter-python');
            if (btn) btn.click();
        }
        
        if (e.key.toLowerCase() === 't') {
            e.preventDefault();
            const btn = document.getElementById('filter-tradingview');
            if (btn) btn.click();
        }
        
        if (e.key.toLowerCase() === 'a') {
            e.preventDefault();
            const btn = document.getElementById('filter-ai');
            if (btn) btn.click();
        }
        
        if (e.key === '?') {
            e.preventDefault();
            const allBtn = document.getElementById('filter-all');
            if (allBtn) allBtn.click();
        }
    });
    
    // Tooltip hint
    const filterBar = document.querySelector('#projects .flex.items-center.gap-x-2');
    if (filterBar) {
        filterBar.setAttribute('title', 'Keyboard: P = Python • T = TradingView • A = AI • ? = All');
    }
}

// Utility to reset filters (exposed)
window.resetProjectFilters = function() {
    const allBtn = document.getElementById('filter-all');
    if (allBtn) allBtn.click();
};

// Optional: add some live market feel (demo)
function addLiveMarketTicker() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    const ticker = document.createElement('div');
    ticker.className = 'text-[10px] px-5 py-[1px] bg-slate-800 border-t border-slate-700 flex items-center justify-center text-emerald-400 font-mono gap-x-2';
    ticker.innerHTML = `
        <span class="font-medium">MARKETS</span> 
        <span class="text-emerald-300">SPX +0.68%</span> 
        <span class="text-emerald-300">QQQ +1.12%</span> 
        <span class="text-emerald-300">BTC +2.7%</span>
        <span class="text-xs text-slate-500 ml-3">•</span> 
        <span class="font-medium text-xs">Live data simulated</span>
    `;
    
    footer.parentNode.insertBefore(ticker, footer);
}

// Run live ticker only on desktop
if (window.innerWidth > 1024) {
    setTimeout(() => {
        if (document.readyState === 'complete') {
            addLiveMarketTicker();
        }
    }, 5200);
}