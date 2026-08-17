//creating shared components between pages

const header = ` 
<header dir="rtl" class="h-[70px] bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 relative shadow-sm"> 
    
    <!-- Title for desktop -->
    <div class="text-right hidden lg:block"> 
        <p id="header-page-title" class="text-sm text-gray-400">لوحة التحكم</p> 
        <p class="text-base font-bold text-gray-800">بوابة متابعة مرضى القلب</p> 
    </div> 
 
    <!-- Mobile hamburger menu button -->
    <button id="menu-btn" class="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none py-1" aria-label="القائمة"> 
        <i class="fa-solid fa-bars text-2xl"></i> 
    </button> 
 
    <!-- Mobile branding -->
    <div class="flex items-center gap-2 lg:hidden">
        <img
            src="../../assets/images/SHC.png"
            alt="شعار مستشفى القلب التخصصي"
            class="w-8 h-8 rounded-lg object-cover shrink-0"
        >
        <span class="text-sm font-bold text-gray-800">مستشفى القلب التخصصي</span>
    </div>

    <!-- Header actions for desktop -->
    <div class="hidden lg:flex items-center gap-4"> 
        <button class="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50" aria-label="الإشعارات"> 
            <i class="fa-regular fa-bell text-lg"></i> 
        </button> 
 
        <div class="flex items-center gap-3"> 
            <div class="text-right"> 
                <p class="text-base font-bold text-gray-800">اسلام زيد</p> 
                <p class="text-sm text-gray-400">طبيب</p> 
            </div> 

            <div class="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center text-sm font-bold shrink-0">
                از
            </div> 
        </div> 
 
        <a href="../../index.html" class="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50" aria-label="تسجيل الخروج"> 
            <i class="fa-solid fa-arrow-right-from-bracket text-lg"></i> 
        </a> 
    </div> 

</header> 
`;
const navbar = ` 
<!-- Backdrop for mobile -->
<div id="sidebar-backdrop" class="fixed inset-0 bg-gray-900/40 z-40 hidden lg:hidden"></div>

<aside
    id="sidebar"
    dir="rtl"
    class="fixed inset-y-0 right-0 z-50 w-64 bg-white border-l border-gray-200 flex flex-col hidden lg:flex lg:static lg:min-h-screen lg:h-full lg:w-64 lg:flex-1"
>

    <!-- Hospital Logo + Name -->
    <div class="h-[75px] flex items-center justify-between px-4 border-b border-gray-200 shrink-0">

        <div class="flex items-center gap-3">
            <img
                src="../../assets/images/SHC.png"
                alt="شعار مستشفى القلب التخصصي"
                class="w-10 h-10 rounded-lg object-cover shrink-0"
            >
            <div class="text-right">
                <p class="text-sm font-bold text-gray-800 whitespace-nowrap leading-none">مستشفى القلب التخصصي</p>
                <p class="text-[11px] text-gray-400 mt-1.5 whitespace-nowrap leading-none">بوابة متابعة المرضى</p>
            </div>
        </div>
        
        <!-- Mobile close button -->
        <button id="close-sidebar-btn" class="lg:hidden text-gray-400 hover:text-gray-600 focus:outline-none p-1">
            <i class="fa-solid fa-xmark text-xl"></i>
        </button>

    </div>


    <!-- Navigation -->
    <nav class="flex-1 py-6 px-4 space-y-3 overflow-y-auto">

        <a
            href="doctor.html"
            class="nav-link flex items-center gap-4 px-4 py-3 rounded-lg text-[15px] font-medium text-gray-600 hover:bg-teal-700 hover:text-white transition-colors"
        >
            <i class="fa-solid fa-gauge w-5 text-center shrink-0 text-base"></i>
            <span>لوحة التحكم</span>
        </a>

        <a
            href="patients.html"
            class="nav-link flex items-center gap-4 px-4 py-3 rounded-lg text-gray-600 hover:bg-teal-700 hover:text-white transition-colors"
        >
            <i class="fa-solid fa-user-group w-5 text-center shrink-0 text-base"></i>
            <span>المرضى</span>
        </a>

        <a
            href="vitals.html"
            class="nav-link flex items-center gap-4 px-4 py-3 rounded-lg text-gray-600 hover:bg-teal-700 hover:text-white transition-colors"
        >
            <i class="fa-solid fa-wave-square w-5 text-center shrink-0 text-base"></i>
            <span>العلامات الحيوية</span>
        </a>

        <a
            href="appointments.html"
            class="nav-link flex items-center gap-4 px-4 py-3 rounded-lg text-gray-600 hover:bg-teal-700 hover:text-white transition-colors"
        >
            <i class="fa-solid fa-calendar-days w-5 text-center shrink-0 text-base"></i>
            <span>المواعيد</span>
        </a>

        <a
            href="reports.html"
            class="nav-link flex items-center gap-4 px-4 py-3 rounded-lg text-gray-600 hover:bg-teal-700 hover:text-white transition-colors"
        >
            <i class="fa-solid fa-chart-column w-5 text-center shrink-0 text-base"></i>
            <span>التقارير</span>
        </a>

    </nav>


    <div class="mt-auto border-t border-gray-200 px-5 py-6 shrink-0">
        <!-- Desktop Logo (hidden on mobile) -->
        <div class="hidden lg:flex justify-center py-4">
            <img
                src="../../assets/images/SHC.png"
                alt="شعار مستشفى القلب التخصصي"
                class="w-36 h-36 object-contain"
            >
        </div>

        <!-- Mobile User Info + Logout (hidden on desktop) -->
        <div class="lg:hidden flex flex-col gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    از
                </div>
                <div class="text-right">
                    <p class="text-base font-bold text-gray-800">اسلام زيد</p>
                    <p class="text-sm text-gray-400">طبيب</p>
                </div>
            </div>
            
            <a href="../../index.html" class="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 text-base font-medium">
                <i class="fa-solid fa-arrow-right-from-bracket w-6 text-center shrink-0"></i>
                تسجيل الخروج
            </a>
        </div>
    </div>

</aside>
`;


document.getElementById("header").innerHTML = header;
document.getElementById("navbar").innerHTML = navbar;

// Apply styles to navbar container to ensure stretches to screen height on desktop
const navbarContainer = document.getElementById("navbar");
if (navbarContainer) {
    navbarContainer.className = "lg:sticky lg:top-0 lg:h-screen shrink-0 z-30 flex flex-col";
}

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("sidebar-backdrop");
const closeBtn = document.getElementById("close-sidebar-btn");

if (menuBtn && sidebar && backdrop) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
        backdrop.classList.toggle("hidden");
    });
    
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            sidebar.classList.add("hidden");
            backdrop.classList.add("hidden");
        });
    }
    
    backdrop.addEventListener("click", () => {
        sidebar.classList.add("hidden");
        backdrop.classList.add("hidden");
    });
}


const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.remove("text-gray-600", "font-medium");
        link.classList.add("bg-teal-50", "text-teal-700", "font-bold");
        
        // Dynamically update header title variable
        const headerTitleText = link.querySelector("span") ? link.querySelector("span").textContent : link.textContent.trim();
        const headerTitleEl = document.getElementById("header-page-title");
        if(headerTitleEl) {
            headerTitleEl.textContent = headerTitleText;
        }
    }
});