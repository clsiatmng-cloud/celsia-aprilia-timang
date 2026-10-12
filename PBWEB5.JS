const form = document.getElementById("formDaftar");

const nama = document.getElementById("nama");
const nim = document.getElementById("nim");
const email = document.getElementById("email");
const tanggal = document.getElementById("tanggal");
const prodi = document.getElementById("prodi");
const password = document.getElementById("password");
const konfirmasi = document.getElementById("konfirmasi");

function validasi(input, error) {
    if (!input.checkValidity()) {
        error.textContent = input.validationMessage;
    } else {
        error.textContent = "";
    }
}

nama.addEventListener("input", () => {
    if (nama.validity.valueMissing) {
        nama.setCustomValidity("Nama wajib diisi");
    } else if (nama.validity.tooShort) {
        nama.setCustomValidity("Nama minimal 3 karakter");
    } else {
        nama.setCustomValidity("");
    }

    validasi(nama, document.getElementById("errorNama"));
});

nim.addEventListener("input", () => {
    if (nim.validity.valueMissing) {
        nim.setCustomValidity("NIM wajib diisi");
    } else if (nim.validity.patternMismatch) {
        nim.setCustomValidity("NIM harus terdiri dari 9 angka");
    } else {
        nim.setCustomValidity("");
    }

    validasi(nim, document.getElementById("errorNim"));
});

email.addEventListener("input", () => {
    if (email.validity.valueMissing) {
        email.setCustomValidity("Email wajib diisi");
    } else if (email.validity.typeMismatch) {
        email.setCustomValidity("Format email tidak valid");
    } else {
        email.setCustomValidity("");
    }

    validasi(email, document.getElementById("errorEmail"));
});

tanggal.addEventListener("input", () => {
    if (tanggal.value === "") {
        tanggal.setCustomValidity("Tanggal lahir wajib diisi");
    } else {
        tanggal.setCustomValidity("");
    }

    validasi(tanggal, document.getElementById("errorTanggal"));
});

prodi.addEventListener("change", () => {
    validasi(prodi, document.getElementById("errorProdi"));
});

password.addEventListener("input", () => {
    if (password.validity.valueMissing) {
        password.setCustomValidity("Password wajib diisi");
    } else if (password.validity.tooShort) {
        password.setCustomValidity("Password minimal 8 karakter");
    } else {
        password.setCustomValidity("");
    }

    validasi(password, document.getElementById("errorPassword"));
});

konfirmasi.addEventListener("input", () => {
    if (konfirmasi.value === "") {
        konfirmasi.setCustomValidity("Konfirmasi password wajib diisi");
    } else if (konfirmasi.value !== password.value) {
        konfirmasi.setCustomValidity("Password tidak sama");
    } else {
        konfirmasi.setCustomValidity("");
    }

    validasi(konfirmasi, document.getElementById("errorKonfirmasi"));
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    document.getElementById("sukses").textContent =
        "Pendaftaran mahasiswa berhasil!";
    
    form.reset();
});
