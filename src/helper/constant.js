import diffusers from "../../src/assets/Projects/diffusers.jpg";
import {
    SiAngular,
    SiTypescript,
    SiNestjs,
    SiPostgresql,
    SiMysql,
    SiVuedotjs,
    SiCsharp,
    SiReact,
    SiDotnet,
    SiMongodb,
    SiMicrosoftsqlserver,
    SiJavascript,
    SiMacos,
    SiMicrosoftazure,
    SiAmazonaws,
    SiDocker,
    SiGit,
    SiWindows,
    SiGithub,
    SiVisualstudiocode
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

export const MenuItems = [
    {
        name: 'Home',
        icon: <AiOutlineHome style={{ marginBottom: "3px" }} />,
        path: '/'
    }, {
        name: 'About',
        icon: <AiOutlineUser style={{ marginBottom: "3px" }} />,
        path: '/about'
    },
    // {
    //     name:'Projects',
    //     icon: <AiOutlineFundProjectionScreen style={{ marginBottom: "3px" }}/>,
    //     path:'/projects'
    // }
];

export const TyperMessages = [
    "Full Stack Developer",
    "Software Engineer",
    "Passionate about Engineering"
];

export const CompanyDetail = {
    Company: "Byteforza",
    CompanyLocation: "in Coimbatore, Tamil Nadu, India",
};

export const Tools = [
    {
        ToolName: "MacOS",
        ToolImage: <SiMacos />,
        ToolDescription: ""
    }, {
        ToolName: "WindowsOS",
        ToolImage: <SiWindows />,
        ToolDescription: ""
    }, {
        ToolName: "Git",
        ToolImage: <SiGit />,
        ToolDescription: ""
    }, {
        ToolName: "GitHub",
        ToolImage: <SiGithub />,
        ToolDescription: ""
    }, {
        ToolName: "VSCode",
        ToolImage: <SiVisualstudiocode />,
        ToolDescription: ""
    }, {
        ToolName: "Azure",
        ToolImage: <SiMicrosoftazure />,
        ToolDescription: ""
    }, {
        ToolName: "AWS",
        ToolImage: <SiAmazonaws />,
        ToolDescription: ""
    }, {
        ToolName: "Docker",
        ToolImage: <SiDocker />,
        ToolDescription: ""
    }
];

export const Frameworks = [
    {
        FrameworkName: "React",
        FrameworkImage: <SiReact />,
        FrameworkDescription: ""
    }, {
        FrameworkName: "Vue",
        FrameworkImage: <SiVuedotjs />,
        FrameworkDescription: ""
    }, {
        FrameworkName: "Angular",
        FrameworkImage: <SiAngular />,
        FrameworkDescription: ""
    }, {
        FrameworkName: "Javascript",
        FrameworkImage: <SiJavascript />,
        FrameworkDescription: ""
    }, {
        FrameworkName: "Typescript",
        FrameworkImage: <SiTypescript />,
        FrameworkDescription: ""
    }, {
        FrameworkName: "Nodejs",
        FrameworkImage: <DiNodejs />,
        FrameworkDescription: ""
    }, {
        FrameworkName: "Nestjs",
        FrameworkImage: <SiNestjs />,
        FrameworkDescription: ""
    }, {
        FrameworkName: "CSharp",
        FrameworkImage: <SiCsharp />,
        FrameworkDescription: ""
    }, {
        FrameworkName: "DotNet",
        FrameworkImage: <SiDotnet />,
        FrameworkDescription: ""
    }, {
        FrameworkName: "MongoDB",
        FrameworkImage: <SiMongodb />,
        FrameworkDescription: ""
    }, {
        FrameworkName: "MYSQL",
        FrameworkImage: <SiMysql />,
        FrameworkDescription: ""
    }, {
        FrameworkName: "MSSQL",
        FrameworkImage: <SiMicrosoftsqlserver />,
        FrameworkDescription: ""
    }, {
        FrameworkName: "Postgres",
        FrameworkImage: <SiPostgresql />,
        FrameworkDescription: ""
    }];

export const ProjectDetails = [
    {
    ProjectTitle: "ESS",
    ProjectDescription: "Rust implementation of the diffusers API, equivalent to huggingface's diffusers. Based on the tch-rs crate (Torch in Rust), this implementation is complete enough so as to be able to run Stable Diffusion v1.5 and v2.1. Main open-source contributor.",
    ProjectDemoUrl: "",
    ProjectImgPath: diffusers
}
];

