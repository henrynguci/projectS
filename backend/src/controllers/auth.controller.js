import * as authService from '../services/auth.service.js';
import * as userService from '../services/user.service.js';
import * as spsoService from '../services/spso.service.js';

// export const signup = async (req, res) => {
//     try {
//         const formData = req.body;
//         const user = (
//             formData.role === 'SPSO'
//                 ? await spsoService.findSpsoByUsername(formData.username)
//                 : await userService.findUserByEmail(formData.email)
//         );
//         if (user) {
//             return res.status(400).json({
//                 message: 'Username / email already exist!'
//             });
//         }
//         if (formData.role === 'SPSO') {
//             await spsoService.createSpso(formData);
//         } else {
//             await userService.createUser(formData);
//         }

//         return res.status(201).json({
//             message: 'Create user successfully!',
//             data: {
//                 username: formData.role === 'SPSO' ? formData.username : undefined,
//                 email: formData.role === 'SPSO' ?  undefined : formData.email,
//             }
//         });
        
//     } catch (error) {
//         console.error(error);
//         return res.status(500);
//     }
// }

export const signin = async (req, res) => {
    try {
        const formData = req.body;
        const validUser = await authService.validUser(formData.username, formData.email, formData.password, formData.role);
        if (validUser) {
            const accessToken = await authService.accessToken(formData.username, formData.email, formData.role);
            return res.status(200).json({
                message: 'Login successfully!',
                data: {
                    username: formData.role === 'SPSO'? formData.username : undefined,
                    email: formData.role === 'SPSO' ? undefined: formData.email,
                    role: formData.role ? formData.role : 'USER',
                    accessToken: accessToken,
                }
            })
        } else {
            return res.status(401).json({
                message: 'Unathorized!'
            })
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}