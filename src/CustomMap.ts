export default class CustomMap {
  private googleMap: google.maps.Map;
  constructor(private id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
}