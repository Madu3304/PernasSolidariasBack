import Sequelize from 'sequelize'

const sequelize = new Sequelize('pernasSolidarias', 'root', '', {
        dialect: "mysql",
        host:"localhost",
        port: "3306",
        define:{TimeStamps: false}
    
    }
)


sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

export default sequelize;