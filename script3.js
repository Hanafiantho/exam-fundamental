var manusia = [
        {nama: 'Alex', umur: 22, pekerjaan: 'DEV', kelamin: 'Woman'},
        {nama: 'Charlee', umur: 27, pekerjaan: 'CTO', kelamin: 'Man'},
        {nama: 'Alicia', umur: 32, pekerjaan: 'DEV', kelamin: 'Woman'},
        {nama: 'Batios', umur: 33, pekerjaan: 'CEO', kelamin: 'Man'},
        {nama: 'Alona', umur: 26, pekerjaan: 'DEV', kelamin: 'Woman'},
        {nama: 'Bakhti', umur: 38, pekerjaan: 'PM', kelamin: 'Man'}],
    pekerjaan = ['ALL']


//MENAMPILKAN DATA
tampilData = (manusia) => {
//Menampilkan data manusia pada Tabel Data
    document.getElementById('showdata').innerHTML = ``
    for (let i = 0; i < manusia.length; i++) {
        document.getElementById('showdata').innerHTML += `
            <tr>
                <td>${manusia[i].nama}</td>
                <td>${manusia[i].umur}</td>
                <td>${manusia[i].pekerjaan}</td>
                <td>${manusia[i].kelamin}</td>
            </tr>
        `
    }

//Memasukan data pada manusia ke array pekerjaan
    for (let i = 0; i < manusia.length; i++) {
        if (!pekerjaan.includes(manusia[i].pekerjaan)) {
            pekerjaan.push(manusia[i].pekerjaan)
        }
    }

//Menampilkan data pada array pekerjaan
    document.getElementById('job').innerHTML = ``
    for (let i = 0; i < pekerjaan.length; i++) {
        document.getElementById('job').innerHTML += `
            <option value="${pekerjaan[i]}">${pekerjaan[i]}</option>
        `
    }
    return
}
tampilData(manusia)


//INPUT DATA
submitInput = (manusia) => {
//Memasukan data baru ke dalam array manusia
    manusia.push({
        nama: document.getElementById('inputNama').value, 
        umur: parseInt(document.getElementById('inputUmur').value), 
        pekerjaan: document.getElementById('inputPekerjaan').value.toUpperCase(), 
        kelamin: document.querySelector('input[name=inputGender]:checked').value
    })
    console.log(manusia)

//Memperbaharui tampila dengan data baru
    tampilData(manusia)
    return
}


//FILTER NAMA
filterName = () => {
    var filterNama = document.getElementById('filterNama').value.toUpperCase(),
        tabelData = document.getElementById('tabelData'),
        tr = tabelData.getElementsByTagName('tr')
    console.log(tr);
    
    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0]

        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filterNama) > -1) {
                tr[i].style.display = ''
            } else {
                tr[i].style.display = 'none'
            }
        }
    }
    return
}


//FILTER UMUR
filterUmur = () => {
    var age1 = document.getElementById('filterUmur1').value,
        age2 = document.getElementById('filterUmur2').value,
        tabelData = document.getElementById('tabelData'),
        tr = tabelData.getElementsByTagName('tr')

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[1]

        if (td) {
            if (parseInt(td.innerHTML) >= age1 && parseInt(td.innerHTML) <= age2) {
                tr[i].style.display = ''
            } else if (age1 == '' || age2 == '') {
                tr[i].style.display = ''
            } else {
                tr[i].style.display = 'none'
            }
        }
    }
    return
}


//FILTER PEKERJAAN
searchJob = () => {
    var pekerjaan = document.getElementById('job').value
        tabelData = document.getElementById('tabelData'),
        tr = tabelData.getElementsByTagName('tr')

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[2]

        if (td) {
            if (td.innerHTML.includes(pekerjaan) || pekerjaan == 'ALL') {
                tr[i].style.display = ''
            } else {
                tr[i].style.display = 'none'
            }
        }
    }
    return
}


//FILTER KELAMIN
filterGender = () => {
    var kelamin = document.querySelector('input[name=filterKelamin]:checked').value,
        tabelData = document.getElementById('tabelData'),
        tr = tabelData.getElementsByTagName('tr')
    
    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[3]

        if (td) {
            if (td.innerHTML.includes(kelamin) || kelamin == 'All') {
                tr[i].style.display = ''
            } else {
                tr[i].style.display = 'none'
            }
        }
    }
    return
}


//SORTING NAMA
sortNama = (manusia) => {
    manusia.sort(function(a,b) {
        if (a.nama < b.nama) {
            return -1
        } else if (a.nama > b.nama) {
            return 1
        } else {
            return 0
        }
    })

    tampilData(manusia)
    return
}


//SORTING UMUR
sortUmur = (manusia) => {
    manusia.sort(function(a,b) {
        return a.umur - b.umur
    })

    tampilData(manusia)
    return
}


//SORTING PEKERJAAN 
sortPekerjaan = (manusia) => {
    manusia.sort (function(a,b) {
        if (a.pekerjaan < b.pekerjaan) {
            return -1
        } else if (a.pekerjaan > b.pekerjaan) {
            return 1
        } else {
            return 0
        }
    })

    tampilData(manusia)
    return
}


//SORTING KELAMIN
sortKelamin = (manusia) => {
    manusia.sort (function(a,b) {
        if (a.kelamin < b.kelamin) {
            return -1
        } else if (a.kelamin > b.kelamin) {
            return 1
        } else {
            return 0
        }
    })

    tampilData(manusia)
    return
}