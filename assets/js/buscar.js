// Definir las clases Receta y Recetario
class Receta {
    constructor(nombre, ingredientes, instrucciones) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.instrucciones = instrucciones;
    }

    toString() {
        return `
            <div class="receta">
                <h3>${this.nombre}</h3>
                <p><strong>Ingredientes:</strong> ${this.ingredientes.join(', ')}</p>
                <p><strong>Instrucciones:</strong> ${this.instrucciones}</p>
            </div>
        `;
    }
}

class Recetario {
    constructor() {
        this.recetas = [];
    }

    agregarReceta(receta) {
        this.recetas.push(receta);
    }

    buscarPorNombre(nombre) {
        return this.recetas.find(receta => receta.nombre.toLowerCase() === nombre.toLowerCase());
    }

    buscarPorIngrediente(ingrediente) {
        return this.recetas.filter(receta => receta.ingredientes.map(ing => ing.toLowerCase()).includes(ingrediente.toLowerCase()));
    }
}

// Crear el recetario y agregar recetas del Chef Mora
const miRecetario = new Recetario();
miRecetario.agregarReceta(new Receta("Pastel de Api", ["harina", "api", "margarina", "azúcar"], "Mezcla todos los ingredientes, forma la masa y hornea a 180 grados por 30 minutos."));
miRecetario.agregarReceta(new Receta("Salteña Boliviana", ["harina", "carne de res", "cebolla", "ají", "papas", "huevos"], "Prepara la masa, cocina el relleno y hornea las salteñas a 200 grados por 20 minutos."));
miRecetario.agregarReceta(new Receta("Pique Macho", ["carne de res", "salchichas", "papas", "tomates", "cebolla", "ají"], "Fríe la carne y las salchichas, mezcla con los otros ingredientes y sirve caliente."));
miRecetario.agregarReceta(new Receta("Chairo Paceño", ["carne de res", "chuño", "maíz", "papa", "zanahoria", "cebolla", "ajo"], "Cocina la carne y los vegetales en caldo hasta que estén tiernos."));
miRecetario.agregarReceta(new Receta("Sopa de Maní", ["maní", "pollo", "papa", "zanahoria", "arvejas"], "Cocina el maní molido con pollo y vegetales en caldo hasta que espese."));
miRecetario.agregarReceta(new Receta("Anticuchos", ["corazón de res", "ají panca", "vinagre", "papas", "salsa de maní"], "Marina el corazón de res, ásalo y sírvelo con papas y salsa de maní."));
miRecetario.agregarReceta(new Receta("Silpancho", ["carne de res", "arroz", "papa", "huevos", "tomate", "cebolla"], "Empaniza y fríe la carne, sirve con arroz, papas y huevo frito."));
miRecetario.agregarReceta(new Receta("Mocochinchi", ["duraznos secos", "canela", "clavo de olor", "azúcar"], "Hierve los duraznos secos con canela y clavo, endulza al gusto y sirve frío."));
miRecetario.agregarReceta(new Receta("Lechón al horno", ["carne de cerdo", "ajo", "comino", "orégano", "sal", "pimienta", "vinagre", "aceite"], "Marina el lechón con los ingredientes y hornea a 180 grados por 3-4 horas, hasta que esté dorado y tierno."));
miRecetario.agregarReceta(new Receta("Fricasé Paceño", ["carne de cerdo", "ají amarillo", "cebolla", "ajo", "chuño", "maíz", "papa"], "Cocina la carne de cerdo en una salsa de ají amarillo con cebolla y ajo. Sirve con chuño, maíz y papas."));
miRecetario.agregarReceta(new Receta("Ají de Fideo", ["fideos", "pollo", "ají amarillo", "papa", "arvejas", "zanahoria", "cebolla", "ajo"], "Cocina los fideos con pollo y una salsa de ají amarillo. Agrega vegetales y cocina hasta que estén tiernos."));
miRecetario.agregarReceta(new Receta("Papas a la Huancaína", ["papas", "queso fresco", "ají amarillo", "leche evaporada", "galletas saladas", "aceite", "huevos", "aceitunas"], "Hierve las papas y sirve con una salsa de ají amarillo, queso, leche y galletas. Decora con huevos y aceitunas."));
miRecetario.agregarReceta(new Receta("Empanadas de Queso", ["harina", "queso", "mantequilla", "huevos", "leche", "azúcar", "sal"], "Prepara la masa con harina, mantequilla y huevos. Rellena con queso, forma las empanadas y hornea a 180 grados por 20 minutos."));
miRecetario.agregarReceta(new Receta("Charque Kan", ["carne de res seca", "papas", "maíz", "cebolla", "ají amarillo", "aceite", "sal"], "Cocina la carne seca y fríe con cebolla y ají amarillo. Sirve con papas y maíz."));
miRecetario.agregarReceta(new Receta("Cazuela de Pollo", ["pollo", "arroz", "papa", "zanahoria", "ají amarillo", "cebolla", "ajo", "caldo de pollo"], "Cocina el pollo con arroz y vegetales en caldo de pollo con ají amarillo hasta que todo esté tierno."));
miRecetario.agregarReceta(new Receta("Humintas", ["maíz fresco", "mantequilla", "azúcar", "queso", "leche", "hojas de maíz"], "Mezcla maíz fresco con mantequilla, azúcar y queso. Envuelve en hojas de maíz y cocina al vapor."));

// Funciones para buscar recetas y mostrar resultados
function buscarPorNombre() {
    const nombre = document.getElementById('buscarNombre').value;
    const resultado = miRecetario.buscarPorNombre(nombre);
    const divResultado = document.getElementById('resultadoNombre');
    if (resultado) {
        divResultado.innerHTML = resultado.toString();
    } else {
        divResultado.innerHTML = "<p>Receta no encontrada.</p>";
    }
}

function buscarPorIngrediente() {
    const ingrediente = document.getElementById('buscarIngrediente').value;
    const resultados = miRecetario.buscarPorIngrediente(ingrediente);
    const divResultado = document.getElementById('resultadoIngrediente');
    if (resultados.length > 0) {
        divResultado.innerHTML = resultados.map(receta => receta.toString()).join('');
    } else {
        divResultado.innerHTML = "<p>No se encontraron recetas con ese ingrediente.</p>";
    }
}
