export function validateTableTotalPaxInput(totalPax: number): void {
  if (totalPax === 0) {
    throw new Error('totalPax should not be 0');
  }

  if (totalPax < 0) {
    throw new Error('totalPax should not be < 0');
  }
}
