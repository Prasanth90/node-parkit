var parkingSlot = function parkingSpot()
{
    this.name = 'fence';
    this.carpark = true;
    this.bikepark = true;
    this.coveredpark = true;
    var location = function(){
        this.latitude = 25;
        this.longitude = 50;
    };
    this.parkSlotLocation = new location();
};

function getParkingSpots()
{
    var spots = [];
    var parkSlot = new parkingSlot();
    spots.push(parkSlot);
    spots.push(parkSlot);
    return spots;
};

module.exports.getparkingslots = getParkingSpots;