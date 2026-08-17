// fetch patients data

async function FetchPatients(){

try{
    const response=await fetch("../data/patients.json");
    if(!response.ok)
    {
        throw new Error("فشل تحميل بيانات المرضى");
    }
    const patients=await response.json();

    const getConditionBadge = (cond) => {
        if (cond === 'حرجة') {
            return `<span class="bg-red-50 text-red-700 px-2.5 py-1 rounded-full text-xs font-bold inline-block border border-red-200">حرجة</span>`;
        }
        if (cond === 'تحتاج إلى متابعة') {
            return `<span class="bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full text-xs font-bold inline-block border border-amber-200">تحتاج إلى متابعة</span>`;
        }
        return `<span class="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-bold inline-block border border-emerald-200">مستقرة</span>`;
    };

    const tableContent=document.getElementById("patients-table-body");
    tableContent.innerHTML=patients.map(patient =>`
        
        <tr class="border-b border-gray-100 hover:bg-gray-50/50">
        
        <td class="px-5 py-4 whitespace-nowrap font-medium text-gray-900">
        ${patient.name}
        </td>
        
        <td class="px-5 py-4 whitespace-nowrap text-gray-650">
        ${patient.age}
        </td>
        
        <td class="px-5 py-4 whitespace-nowrap text-gray-600">
        ${patient.gender}
        </td>
        
        <td class="px-5 py-4 whitespace-nowrap text-gray-600">
        ${patient.phone}
        </td>
        
        <td class="px-5 py-4 whitespace-nowrap">
        ${getConditionBadge(patient.condition)}
        </td>
        
        <td class="px-5 py-4 whitespace-nowrap text-gray-600">
        ${patient.diagnosis}
        </td>

        <td class="px-5 py-4 whitespace-nowrap text-gray-600">
        ${patient.bloodType}
        </td>

        <td class="px-5 py-4 whitespace-nowrap text-gray-600 font-semibold">
        ${patient.heartRate}
        </td>

        <td class="px-5 py-4 whitespace-nowrap text-gray-600 font-semibold">
        ${patient.bloodPressure}
        </td>

        <td class="px-5 py-4 whitespace-nowrap text-gray-600 font-semibold">
        ${patient.oxygenLevel}%
        </td>
        
        </tr>
    `).join('');

}
catch(error){
    console.error("Error loading patients", error);
}

}
FetchPatients();