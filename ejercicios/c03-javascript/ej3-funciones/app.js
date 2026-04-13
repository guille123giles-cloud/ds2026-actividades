function calcularPrecioFinal(monto, medioPago) {
    if (monto < 200) {
        return monto;
    } else if (monto >= 200 && monto <= 400) {
        if (medioPago === "E") {
            return monto * 0.70;
        } else if (medioPago === "D") {
            return monto * 0.80;
        } else if (medioPago === "C") {
            return monto * 0.90;
        }
    } else if (monto > 400) {
        return monto * 0.60;
    }
    return monto;
}

let m1 = 150, p1 = "E";
console.log(`Monto: $${m1} | Pago: ${p1} -> Final: $${calcularPrecioFinal(m1, p1)}`);

let m2 = 300, p2 = "E";
console.log(`Monto: $${m2} | Pago: ${p2} -> Final: $${calcularPrecioFinal(m2, p2)}`);

let m3 = 300, p3 = "D";
console.log(`Monto: $${m3} | Pago: ${p3} -> Final: $${calcularPrecioFinal(m3, p3)}`);

let m4 = 300, p4 = "C";
console.log(`Monto: $${m4} | Pago: ${p4} -> Final: $${calcularPrecioFinal(m4, p4)}`);

let m5 = 450, p5 = "E";
console.log(`Monto: $${m5} | Pago: ${p5} -> Final: $${calcularPrecioFinal(m5, p5)}`);