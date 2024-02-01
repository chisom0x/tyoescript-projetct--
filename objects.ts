const profile = {
    name: 'kelz',
    age: 18,
    coords: {
        lat: 2,
        lng: 32
    },
    setAge(age: number): void {
       this.age
    }
}

const {age}: {age: number} = profile
const {coords: {lat, lng}}: {coords: {lat: number, lng: number}} = profile