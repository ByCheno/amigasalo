import './App.css';
import AmigasALO from './components/AmigasALO';

function App() {
  return (
    <div className="App">
      <div className='container-principal'>
        <h1>Aston Martin F1 Team</h1>
      </div>
      <div className='cards'>
          <AmigasALO imagen = 'papaKrack.jpg'
            nombre = 'Myke Krack'
            cargo = 'Ingeniero'
            empresa = 'Aston Martin F1 Team' 
            descripcion = 'Ingeniero con una amplia experiencia en la Fórmula 1. Ha desempeñado roles significativos en varios equipos de F1 a lo largo de los años. Su experiencia y conocimientos técnicos lo han convertido en una figura clave en el equipo de Aston Martin F1, donde ha contribuido al desarrollo y mejora del rendimiento de sus monoplazas.'
          />
          
          <AmigasALO imagen = 'papaKrack.jpg'
          nombre = 'Lance Stroll'
          cargo = 'Piloto' 
          empresa = 'Aston Martin F1 Team' 
            descripcion = 'Lance Stroll es un talentoso piloto de Fórmula 1 canadiense. Comenzó su carrera en la F1 con el equipo Williams y actualmente forma parte del equipo Aston Martin F1. A pesar de su juventud, Stroll ha demostrado ser un competidor fuerte y ha logrado destacar en varias carreras. Su habilidad para adaptarse rápidamente a diferentes condiciones de pista y su determinación en la pista lo convierten en un piloto prometedor para el futuro de la Fórmula 1.' />
          
          <AmigasALO imagen = 'papaKrack.jpg'
            nombre='Pedro de la Rosa'
            cargo='Ex Piloto'
            empresa='Aston Martin F1 Team'
            descripcion='Pedro de la Rosa es un ex piloto de Fórmula 1 español. Compitió en la F1 durante más de una década, representando a varios equipos, incluyendo Jaguar, McLaren y Sauber. De la Rosa es conocido por su habilidad técnica y su enfoque meticuloso en el desarrollo del automóvil. Después de retirarse de la F1, ha trabajado como piloto de pruebas y asesor técnico en varios equipos de Fórmula 1, aportando su experiencia y conocimientos en el desarrollo de los monoplazas.'
          />

          <AmigasALO imagen = 'papaStroll.jpg'
            nombre = 'Lawrence Stroll'
            cargo = 'Jefe'
            empresa = 'Aston Martin F1 Team' 
            descripcion = 'Lawrence Stroll es un empresario canadiense conocido por su éxito en la industria de la moda y por ser un apasionado del automovilismo. En el mundo del automovilismo, Stroll es mejor conocido por adquirir una participación significativa en el equipo Racing Point F1, que posteriormente se convirtió en Aston Martin F1 Team. Como director del equipo, ha desempeñado un papel crucial en la dirección y estrategia del equipo, con el objetivo de llevarlo a la cima de la Fórmula 1.'
          />
          <AmigasALO imagen = 'padre.jpg'
            nombre = 'Fernando Alonso'
            cargo = 'Piloto'
            empresa = 'Aston Martin F1 Team' 
            descripcion = 'A lo largo de su carrera en la F1, Alonso ha ganado dos campeonatos del mundo, en 2005 y 2006, ambos con el equipo Renault. Es conocido por su habilidad para sacar el máximo rendimiento de cualquier monoplaza y por su astucia en la pista. Después de un breve retiro, regresó a la Fórmula 1 con el equipo Alpine (anteriormente Renault). Además de su éxito en la F1, Alonso ha competido en otras categorías de automovilismo, como el Mundial de Resistencia y las 500 Millas de Indianápolis, demostrando su versatilidad como piloto.'
          />
      </div>
    </div>
  );
}

export default App;
