function handleFormSubmit() {

    const nama = document.getElementById('inputNama')?.value || "";
    const email = document.getElementById('inputEmail')?.value || "";
    const tgl = document.getElementById('inputTgl')?.value || "";
    const pesan = document.getElementById('inputPesan')?.value || "";
    const jk = document.querySelector('input[name="jk"]:checked')?.value || "-";

    if (!nama || nama.trim() === "") {
        alert("Mohon isi nama Anda terlebih dahulu.");
        return;
    }

    const elements = {
        'resNama': nama,
        'resEmail': email || "-",
        'resTgl': tgl || "-",
        'resJK': jk,
        'resPesan': pesan || "-"
    };

    for (const [id, value] of Object.entries(elements)) {
        const target = document.getElementById(id);
        if (target) {
            target.innerText = value;
        }
    }

    alert("Thank you " + nama + " for filling in the form ! We will connect with you soon.");
}