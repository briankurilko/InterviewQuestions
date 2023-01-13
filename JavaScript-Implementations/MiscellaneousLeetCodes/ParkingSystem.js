// https://leetcode.com/problems/design-parking-system/
// The trick is that we don't actually need to store anything in the spots, we just need to store counts.
class ParkingSystem {
  constructor(big, medium, small) {
    this.spots = [big, medium, small];
  }

  addCar(carType) {
    if (this.spots[carType - 1] === 0) {
      return false;
    }
    this.spots[carType - 1]--;
    return true;
  }
}

const parkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1));
console.log(parkingSystem.addCar(2));
console.log(parkingSystem.addCar(3));
console.log(parkingSystem.addCar(1));
