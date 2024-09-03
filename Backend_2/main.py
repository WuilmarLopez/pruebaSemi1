from flask import Flask, jsonify

app = Flask(__name__)

# Endpoint para verificación de estado
@app.route('/check', methods=['GET'])
def check():
    return '', 200

# Endpoint para obtener el objeto JSON
@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "Instancia": "Instancia 2 - Api2",
        "Curso": "Seminario de Sistemas 1",
        "Seccion": "Sección A",
        "Periodo": "2do Semestre 2024",
        "Estudiante": "Wuilmar Hamilton López García - 201901069"
    })

if __name__ == '__main__':
    app.run(debug=True, port=3000)
