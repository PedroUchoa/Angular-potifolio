import { Component } from '@angular/core';
import { ListProjectsComponent } from '../../components/list-projects/list-projects.component';
import { ProjectsInterface } from '../../interfaces/projects-interface';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [ListProjectsComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css',
})
export class ProjectPageComponent {
  projects: ProjectsInterface[] = [
    {
      img: '../../../assets/igms/chat-project.jpg',
      title: 'Multi Chat',
      desctription:
        'Este projeto é uma aplicação de chat em tempo real, inspirada no Discord, que permite aos usuários se comunicarem em salas de conversa.',
      stacks: 'Java, SpringBoot, Mysql, Websocket',
      url: 'https://github.com/PedroUchoa/Spring-Chat-Multi',
    },
    {
      img: '../../../assets/igms/front-chat-project.png',
      title: 'Multi Chat Front',
      desctription:
        'Este é a interface do multi chat api que foi construída com Angular e TypeScript para proporcionar uma experiência de usuário dinâmica e responsiva.',
      stacks: 'Typescript, Angular, SockJs',
      url: 'https://github.com/PedroUchoa/Angular-Chat-Multi',
    },
    {
      img: '../../../assets/igms/book-project.jpg',
      title: 'Book Saver API',
      desctription:
        'Este é um projeto de um sistema backend para um site que permite que os usuarios vejam uma lista de livros e possam salvar os seus favoritos',
      stacks: 'Java, SpringBoot, Mysql',
      url: 'https://github.com/PedroUchoa/Spring-Book-Api',
    },
    {
      img: '../../../assets/igms/front-book-project.png',
      title: 'Front Book Saver',
      desctription:
        'Aplicativo web projetado para ajudar usuários a gerenciar e salvar seus livros favoritos, podendo os adicionar, editar e excluir da sua coleção.',
      stacks: 'Typescript, Angular',
      url: 'https://github.com/PedroUchoa/Spring-Book-Api',
    },
    {
      img: '../../../assets/igms/front-drip-project.png',
      title: 'Drip Store',
      desctription:
        'Este projeto é uma landpage que simula uma loja de roupas virtual componsta por uma Página Inicial, Página de listagem de produtos e Página de Visualização do Produto.',
      stacks: 'Typescript, React, Swiper',
      url: 'https://github.com/PedroUchoa/React-DripStrore',
    },
    {
      img: '../../../assets/igms/school-project.png',
      title: 'School Api',
      desctription:
        'Uma API que facilita a administração e gestão de atividades escolares, cria uma solução eficiente para escolas que querem gerenciar suas informações no ambiente educacional.',
      stacks: 'Java, SpringBoot, Mysql',
      url: 'https://github.com/PedroUchoa/Spring-School-Api',
    },
  ];
}
