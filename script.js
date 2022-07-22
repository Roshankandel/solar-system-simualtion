const planets = document.querySelectorAll('.planet')
const p_radii = [11, 16.5, 25, 35, 56, 69, 82.5]
let p_radians = new Array(8).fill(0)
const p_velocities = [0.032, 0.023, 0.020, 0.016, 0.008, 0.006, 0.004]
const p_orbits = document.querySelectorAll('.p-orbit')
const m_orbit = document.querySelector('#m-orbit')

p_orbits.forEach((p_orbit, index) => {
    p_orbit.style.height = `${p_radii[index] * 2}vmin`
    p_orbit.style.width = `${p_radii[index] * 2}vmin`
})

setInterval(() => {
    planets.forEach((planet, index) => {
        planet.style.marginLeft = `${Math.cos(p_radians[index]) * p_radii[index]}vmin`
        planet.style.marginTop = `${Math.sin(p_radians[index]) * p_radii[index]}vmin`
        p_radians[index] += p_velocities[index]
    })


}, 1000 / 60)

