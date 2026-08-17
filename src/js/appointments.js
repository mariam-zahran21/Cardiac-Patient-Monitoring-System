async function fetchAppointments() {
    try {
        const [patientsResponse, appointmentsResponse] = await Promise.all([
            fetch("../data/patients.json"),
            fetch("../data/appointments.json")
        ]);

        if (!patientsResponse.ok || !appointmentsResponse.ok) {
            throw new Error("فشل تحميل البيانات");
        }

        const patients = await patientsResponse.json();
        const appointments = await appointmentsResponse.json();

        // Map over appointments, find matching patient name, and render
        const tableBody = document.getElementById("appointments-table-body");
        
        tableBody.innerHTML = appointments.map(app => {
            const patient = patients.find(p => p.id === app.patientId);
            const patientName = patient ? patient.name : `مريض رقم ${app.patientId}`;
            
            // Badge matching logic
            let statusBadge = "";
            if (app.status === "مجدول") {
                statusBadge = `<span class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-200">مجدول</span>`;
            } else if (app.status === "عاجل") {
                statusBadge = `<span class="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold border border-red-200">عاجل</span>`;
            } else if (app.status === "مكتمل") {
                statusBadge = `<span class="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">مكتمل</span>`;
            } else {
                statusBadge = `<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">${app.status}</span>`;
            }

            return `
                <tr class="hover:bg-gray-50/50 transition-colors">
                    <td class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">${patientName}</td>
                    <td class="px-6 py-4 text-gray-600 whitespace-nowrap font-medium" dir="ltr"><span class="float-right">${app.date}</span></td>
                    <td class="px-6 py-4 text-gray-600 whitespace-nowrap font-semibold">${app.time}</td>
                    <td class="px-6 py-4 text-gray-500 whitespace-nowrap">${app.reason}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${statusBadge}</td>
                </tr>
            `;
        }).join('');

    } catch (error) {
        console.error("Error loading appointments details:", error);
    }
}

fetchAppointments();
