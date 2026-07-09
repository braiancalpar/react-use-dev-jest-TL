import {
  formatPrice,
  calculateTotalPrice,
  calculateTotalPriceWithDiscount,
} from ".";

describe("Testando funcoes utilitarias do projeto", () => {
  test("Deve formatar os precos corretamente", () => {
    // expect(formatPrice(10)).toBe(`R$ 10,00`);
    expect(formatPrice(10)).toContain("R$");
    expect(formatPrice(10)).toContain("10,00");
  });

  test("Deve calcular o preco total", () => {
    expect(calculateTotalPrice([10, 20, 30])).toBe(60);
  });

  test("Deve calcular o preco total com desconto", () => {
    expect(calculateTotalPriceWithDiscount([10, 20, 30], 0.1)).toBe(54);
  });
});
