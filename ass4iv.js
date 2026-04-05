const studentUrl = "http://localhost:3000/students";
async function fetchStudents() {
try {
const res = await axios.get(studentUrl);
let students = res.data;
const query = document.getElementById('searchInput').value.toLowerCase();
const tbody = document.getElementById('studentTableBody');
tbody.innerHTML = students.filter(s => s.name.toLowerCase().includes(query))
.map(s => `
<tr>
<td>${s.name}</td>
<td>${s.branch}</td>
<td>${s.cgpa}</td>
<td>
<button onclick="editStudent('${s.id}')">Edit</button>
<button onclick="deleteStudent('${s.id}')">Delete</button>
</td>
</tr>`).join("");
} catch (err) {
console.error("Server not running?", err);
}
}
document.getElementById('studentForm').addEventListener('submit', async (e) => {
e.preventDefault();
const id = document.getElementById('studentId').value;
const data = {
name: document.getElementById('stdName').value,
branch: document.getElementById('stdBranch').value,
cgpa: document.getElementById('stdCgpa').value
};
try {
if(id) {
await axios.put(`${studentUrl}/${id}`, data);
} else {
await axios.post(studentUrl, data);
}
document.getElementById('studentForm').reset();
document.getElementById('studentId').value = "";
fetchStudents();
} catch (err) {
console.error("Save failed", err);
}
});
async function deleteStudent(id) {
if(confirm("Are you sure?")) {
try {
await axios.delete(`${studentUrl}/${id}`);
fetchStudents();
} catch (err) {
console.error("Delete failed", err);
}
}
}
async function editStudent(id) {
try {
const res = await axios.get(`${studentUrl}/${id}`);
document.getElementById('studentId').value = res.data.id;
document.getElementById('stdName').value = res.data.name;
document.getElementById('stdBranch').value = res.data.branch;
document.getElementById('stdCgpa').value = res.data.cgpa;
} catch (err) {
console.error("Load failed", err);
}
}
fetchStudents();