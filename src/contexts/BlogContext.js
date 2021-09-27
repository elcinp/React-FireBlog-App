import { createContext, useState, useEffect } from "react";
import { userObserver } from "../helpers/firebase"

export const AuthContext = createContext();

export const initialState = [
    {
        title:"ReactJS",
        image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.gencprogramci.org%2Fwp-content%2Fuploads%2F2021%2F04%2FReact.png&imgrefurl=https%3A%2F%2Fwww.gencprogramci.org%2Freact-nedir-nasil-calisir%2F&tbnid=y27M8DKkgCe0HM&vet=12ahUKEwiIg7KO55zzAhVo8LsIHcPpCyQQMygDegUIARCyAQ..i&docid=t1rINxduZ9oO2M&w=1242&h=708&q=react&ved=2ahUKEwiIg7KO55zzAhVo8LsIHcPpCyQQMygDegUIARCyAQ",

        content:"React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
        id:1
    },

    {
        title:"DJANGO",
        image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1400%2F1*eXueYfyPmD2H3t_6nB9_0Q.png&imgrefurl=https%3A%2F%2Fmedium.com%2Fkartaca%2Fdjango-101-yeni-ba%25C5%259Flayacaklar-i%25C3%25A7in-temel-bilgiler-9638f6bfa639&tbnid=RCSTG2HpS6r8fM&vet=12ahUKEwi4pIb595zzAhWW5bsIHWv3D8sQMygHegUIARDDAQ..i&docid=_EL1GWrB3ba_LM&w=1280&h=720&q=django&ved=2ahUKEwi4pIb595zzAhWW5bsIHWv3D8sQMygHegUIARDDAQ",

        content:"Django is a Python-based free and open-source web framework that follows the model-template-views architectural pattern. It is maintained by the Django Software Foundation, an American independent organization established as a 501 non-profit.",
        id:2
    },

    {
        title:"POSTRESQL",
        image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.mshowto.org%2Fimages%2Farticles%2F2020%2F05%2F1_PY24xlr4TpOkXW04HUoqrQ.jpeg&imgrefurl=https%3A%2F%2Fwww.mshowto.org%2Fpostgresql-mimarisi-ve-kurulumu.html&tbnid=N5L_Gs_eVSRTcM&vet=12ahUKEwjfj-qN-JzzAhXQh_0HHXb6Aw4QMygAegUIARCzAQ..i&docid=piWWbSp-EKELlM&w=800&h=400&q=postresql&ved=2ahUKEwjfj-qN-JzzAhXQh_0HHXb6Aw4QMygAegUIARCzAQ",

        content:"PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.",
        id:3
    },

    {
        title:"EXPRESSJS",
        image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fiotbyhvm.ooo%2Fwp-content%2Fuploads%2F2019%2F01%2Fexpressjs.png&imgrefurl=https%3A%2F%2Fiotbyhvm.ooo%2Fexpressjs-web-framework-for-node-js%2F&tbnid=rMYWGSe678hzrM&vet=12ahUKEwi-gsWZ-JzzAhXUgv0HHc9MBYAQMygMegUIARDHAQ..i&docid=uHyZ3g2fV1d6aM&w=872&h=472&q=expressjs&ved=2ahUKEwi-gsWZ-JzzAhXUgv0HHc9MBYAQMygMegUIARDHAQ",

        content:"Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
        id:4
    },
]