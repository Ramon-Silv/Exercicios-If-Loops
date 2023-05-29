let paisA= 80000;
let paisB= 200000;
let anos= 0;

while (paisA < paisB) {
    paisA += paisA * 0.03;
    paisB += paisB * 0.015;
    anos++;
}

document.write("Serão necessários " + anos + " anos para a população do país A ultrapassar ou igualar a população do país B.");