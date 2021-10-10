import faker from "faker";
import { Mappable } from "./CustomMap";
export default class Company implements Mappable {
  readonly companyName: string;
  readonly catchPhrase: string;
  readonly location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
      <h1>
        Company name: ${this.companyName}
      </h1>
      <h2>
        Catchphrase: ${this.catchPhrase}
    </h2>
    </div>
    `;
  }
}
