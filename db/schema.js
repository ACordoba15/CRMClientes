const { gql } = require("apollo-server");

// Schema
// template stings (``) => AltGr + '}'
const typeDefs = gql`
  type Curso {
    titulo: String
  }

  type Tecnologia {
    tecnologia: String
  }

  type Query {
    obtenerCursos: [Curso]
    obtenerTecnologias: [Tecnologia]
  }
`;

module.exports = typeDefs;
