const Usuario = require('../models/Usuario')

const bcrypt = require('bcryptjs')


module.exports = class UsuController {

    
    static login(req, res) {
        res.render('auth/login')
    }

    
    static async loginPost(req, res) { 
        const { email, password } = req.body

        
        const usuario = await Usuario.findOne({ where: { email: email } })

        
        if (!usuario) {
            req.flash('message', 'usuário não encontrado')
            res.render('auth/register') 

            return
        }

        
        const passwordMatch = bcrypt.compareSync(password, usuario.password)

         
        if (!passwordMatch) {
            req.flash('message', 'senha invalida, por favor, tente novamente!')
            res.render('auth/login') 

            return
        }

        
        req.session.usuarioid = usuario.id

        
        req.flash('message', "autenticação realizada com sucesso!")
        req.session.save(() => {
            res.redirect('items/crud') //abre o dashboard
        })
    }

    //rederiza a página de registro
    static register(req, res) {
        res.render('auth/register')//ALTERAR NOME PARA USU
    }

    //funções para realizar o registro
    static async registerPost(req, res) {
        const { name, email, password, confirmpassword } = req.body  //pega os dados fornecidos no form

        //validação de senha
        if (password != confirmpassword) {
            req.flash('message', 'As Senhas não conferem, tente novamente!')
            res.render('auth/register')

            return
        }

        //checa se já existe o usuário
        const checkIfUsuarioExists = await Usuario.findOne({ where: { email: email } })

        //Mensagem de erro se já existir usuário com o mesmo nome
        if (checkIfUsuarioExists) {
            req.flash('message', 'Usuario já cadastrado!')
            res.render('auth/register')

            return
        }

        //criação da senha
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)//DEPOIS ALTERAR  NOME DA CONST

        //guarda os dados do usuario
        const usuario = {
            name,
            email,
            password: hashedPassword
        }

        //cria o usuário com os dados fornecidos
        try {
            const createdUsuario = await Usuario.create(usuario) //joga os dados para a tabela usuário

            // inicializa a sessão a partir do id
            req.session.usuarioid = createdUsuario.id

            req.flash('message', 'Cadastro Realizado com sucesso!')

            //após o cadastro abre a página de login
            req.session.save(() => {
                res.redirect('/login')
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    //para sair do perfil
    static logout(req, res) {
        req.session.destroy()
        res.redirect('/')
    }
}