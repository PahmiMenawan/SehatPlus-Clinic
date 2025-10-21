// IMT
function getIMT() {
  // ELEMENTS //
  clear();
  const result = document.getElementById("result");
  const title = document.createElement("h2");
  const stat = document.createElement("div");
  stat.classList.add("stats");
  const tinggi = document.createElement("span");
  const berat = document.createElement("span");
  const judgementLine = document.createElement("div");
  judgementLine.classList.add("line");
  const desc = document.createElement("p");
  desc.classList.add("desc");

  let tb = document.getElementById("tinggiBadan").value;
  let bb = document.getElementById("beratBadan").value;
  if (!tb || !bb || isNaN(tb) || isNaN(bb)) return alert("numbers only");
  bb *= bb;
  let imt = Math.floor((bb / tb) * 10) / 10;
  // VALIDATIONS

  if (imt < 18.5) {
    title.textContent = "Kurus";
    judgementLine.classList.add("red");
    desc.textContent = "Utamakan hidup sehat dan perhatikan konsumsi harian";
  } else if (imt <= 24.9) {
    title.textContent = "Berat badan Ideal";
    judgementLine.classList.add("green");
    desc.textContent =
      "Pastikan asupan kalori sesuai dengan kebutuhan kalori harian & konsumsi makanan sehat";
  } else if (imt <= 29.9) {
    title.textContent = "Overweight";
    judgementLine.classList.add("yellow");
    desc.textContent = "Utamakan hidup sehat dan perhatikan konsumsi harian";
  } else {
    title.textContent = "Obesitas";
    judgementLine.classList.add("red");
    desc.textContent = "Utamakan hidup sehat dan perhatikan konsumsi harian";
  }
  tinggi.textContent =`Tinggi badan ${document.getElementById("tinggiBadan").value}cm` ;
  berat.textContent = `Berat Badan ${document.getElementById("beratBadan").value}kg`;

  result.appendChild(title);
  result.appendChild(stat);
  stat.appendChild(tinggi);
  stat.appendChild(berat);
  result.appendChild(judgementLine);
  result.appendChild(desc);
}

// HPL
function getDate() {
  // ELEMENTS
  clear();
  const result = document.getElementById("result");
  const title = document.createElement("h2");
  const age = document.createElement("p");
  const predict = document.createElement("p");

  // VARIABLES
  const input = document.getElementById("dateTime").value;
  const dateObj = new Date(input);
  const now = new Date();
  const firstOfYear = new Date(now.getFullYear(), 0, 1);

  // VALIDATOR
  if (dateObj < firstOfYear || dateObj > now) {
    alert(
      `Tanggal harus antara ${firstOfYear.toLocaleDateString("id-ID")} dan ${now.toLocaleDateString("id-ID")}.`
    );
    return;
  }

  // CALC
  dateObj.setFullYear(dateObj.getFullYear() + 1);
  dateObj.setMonth(dateObj.getMonth() - 3);
  dateObj.setDate(dateObj.getDate() + 7);
  const formattedDate = dateObj.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const hpht = new Date(input);
  const today = new Date();
  const diffMs = today - hpht;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(diffDays / 7);
  const days = diffDays % 7;

  title.textContent = "Selamat Bunda!";
  age.textContent = `Usia kehamilan saat ini ${weeks} minggu ${days} hari`;
  predict.textContent = `Dengan perkiraan lahir pada ${formattedDate}`;

  result.appendChild(title);
  result.appendChild(age);
  result.appendChild(predict);
}

// AMB
function getAMB() {
  const gender = document.querySelector(
    'input[name="chooseGender"]:checked'
  )?.value;
  const tb = document.getElementById("tinggiBadan").value;
  const bb = document.getElementById("beratBadan").value;
  const umur = document.getElementById("umur").value;
  // VALIDATOR
  if(!tb || !bb || !umur || isNaN(tb) || isNaN(bb) || isNaN(umur)) return alert('Numbers only')

  let amb = 0;
  switch (gender) {
    case "laki":
      amb = 10 * bb + 6.25 * tb - 5 * umur + 5;
      break;
    case "perempuan":
      amb = 10 * bb + 6.25 * tb - 5 * umur - 161;
      break;
    default:
      alert("GENDER GA VALID");
      return;
  }
  clear();
  const result = document.getElementById("result");
  const desc = document.createElement('p');
  desc.textContent=`Kamu membutuhkan ${amb} kkal/hari`
  result.appendChild(desc)
}

function clear() {
  const result = document.getElementById("result");
  result.innerHTML = "";
}
