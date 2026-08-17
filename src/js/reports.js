async function fetchReports() {
    try {
        const response = await fetch("../data/patients.json");
        if (!response.ok) {
            throw new Error("فشل تحميل التقارير الطبية");
        }

        const patients = await response.json();
        const tableBody = document.getElementById("reports-table-body");
        
        // Filter patients who actually have a diagnosis
        const patientsWithReports = patients.filter(p => p.diagnosis && p.diagnosis.trim() !== "");

        tableBody.innerHTML = patientsWithReports.map(p => {
            const date = new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
            
            return `
                <tr class="hover:bg-gray-50/50 transition-colors">
                    <td class="px-6 py-4 font-semibold text-gray-500 whitespace-nowrap">#${p.id}</td>
                    <td class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-file-medical text-teal-600"></i>
                            ${p.name}
                        </div>
                    </td>
                    <td class="px-6 py-4 font-bold text-teal-700 whitespace-nowrap">${p.diagnosis}</td>
                    <td class="px-6 py-4 text-gray-500 whitespace-nowrap"><i class="fa-regular fa-clock ml-1 text-xs"></i> ${date}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center gap-2">
                            <button class="bg-white border border-teal-600 text-teal-700 hover:bg-teal-50 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5">
                                <i class="fa-solid fa-eye"></i> عرض
                            </button>
                            <button class="bg-teal-600 text-white hover:bg-teal-700 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5">
                                <i class="fa-solid fa-download"></i> PDF
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');

        if(patientsWithReports.length === 0){
             tableBody.innerHTML = `<tr><td colspan="5" class="px-6 py-8 text-center text-gray-500 font-medium whitespace-nowrap">لا توجد تقارير طبية متاحة حالياً.</td></tr>`;
        }

    } catch (error) {
        console.error("Error loading reports details:", error);
    }
}

fetchReports();
