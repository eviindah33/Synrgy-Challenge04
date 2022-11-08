class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  filterCar() {
    const id_driver = document.getElementById("id_driver").value;
    const id_date = document.getElementById("id_date").value;
    const id_time = document.getElementById("id_time").value;
    const passengerCount = document.getElementById("passengerCount").value;
    if (id_driver == "" || id_date == "" || id_time == "" || passengerCount == "") {
      alert("Isi Data Yang Kosong");
    } else {
      console.log(id_driver + id_date + id_time + passengerCount);
    }
  }

  run = () => {
    console.log(Car.list.length);
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
