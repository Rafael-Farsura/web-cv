"use client";

import {
  Code,
  Blocks,
  Database,
  ListTodo,
  FileText,
  MessageCircleCodeIcon,
  MailPlusIcon,
  Github,
} from "lucide-react";
import Image from "next/image";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";

export function Section() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-background">
      <div className="w-full max-w-6xl space-y-16 text-center">
        {/* Título */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-heading bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent animate-pulse">
            Full Stack Developer
          </h1>
          <p className="text-xl text-muted-foreground hover:animate-bounce">
            Especializado em Nest.js e Blockchain
          </p>
        </header>

        {/* Cards principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-stretch">
          {/* Desenvolvimento */}
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <Code className="h-5 w-5" />
                <span className="bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent animate-pulse">
                  Desenvolvimento
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-left">
              <p className="text-muted-foreground">
                Construo aplicações web e científicas robustas e escaláveis
                utilizando as melhores práticas e tecnologias modernas.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "JavaScript",
                  "Node.js",
                  "NestJS",
                  "React",
                  "Next.js",
                  "Express",
                  "Java",
                  "Spring Boot",
                  "Prisma",
                  "TypeORM",
                  "C++",
                ].map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Blockchain */}
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <Blocks className="h-5 w-5" />
                <span className="bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent animate-pulse">
                  Blockchain
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-left">
              <p className="text-muted-foreground">
                Desenvolvimento de smart contracts e aplicações descentralizadas
                com foco em segurança e eficiência.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Solidity",
                  "Hardhat",
                  "Foundry",
                  "RSK",
                  "T-REX",
                  "ERC-20",
                  "ERC-1400",
                  "ERC-3643",
                  "KMS",
                ].map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Banco de Dados */}
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <Database className="h-5 w-5" />
                <span className="bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent animate-pulse">
                  Banco de Dados
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-left">
              <p className="text-muted-foreground">
                Projeto e gerencio bancos de dados relacionais com MySQL e
                PostgreSQL, garantindo performance, segurança e escalabilidade.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "PostgreSQL",
                  "MySQL",
                  "Redis",
                  "Prisma",
                  "TypeORM",
                ].map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Metodologias Ágeis */}
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <ListTodo className="h-5 w-5" />
                <span className="bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent animate-pulse">
                  Metodologias Ágeis
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-left">
              <p className="text-muted-foreground">
                Aplico metodologias ágeis para otimizar processos de
                desenvolvimento e entregar valor de forma consistente.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Scrum",
                  "Kanban",
                  "CI/CD",
                  "TDD",
                  "SOLID",
                  "DDD",
                  "Clean Architecture",
                ].map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Botões */}
        <div className="flex justify-center gap-6">
          <Button
            size="lg"
            className="group bg-slate-600 text-white bg-gradient-to-tr from-blue-500  to-gray-700 animate-pulse
            hover:bg-gradient-to-bl hover:from-blue-700 hover:to-blue-500"
            onClick={() => window.open("/api/cv", "_blank")}
          >
            <FileText className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Ver Currículo
          </Button>
          <Button
            size="lg"
            className="group bg-green-600 text-white bg-gradient-to-tr from-green-500 to-gray-700 animate-pulse hover:bg-gradient-to-bl hover:from-green-700 hover:to-green-500"
            onClick={() => window.open("https://wa.me/5511955003873", "_blank")}
          >
            <MessageCircleCodeIcon className="mr-2 h-5 w-5 group-hover:animate-ping" />
            Enviar Mensagem
          </Button>
          <Button
            size="lg"
            className="group bg-gradient-to-tr from-red-500 via-pink-600 to-gray-700 text-white animate-pulse 
  hover:bg-red-600 hover:from-none hover:to-none hover:animate-none transition-all duration-300"
            onClick={() =>
              window.open(
                'https://mail.google.com/mail/?view=cm&fs=1&to=rafaelfarsura@gmail.com&su=Contato%20Profissional&body=Olá%20Rafael,%20gostaria%20de%20falar%20sobre...',
                '_blank'
              )
            }
          >
            <MailPlusIcon className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Enviar E-mail
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group text-black bg-gradient-to-bl from-slate-700 to-orange-600 text-white animate-pulse hover:bg-gradient-to-bl hover:from-slate-700 hover:to-orange-500"
            onClick={() =>
              window.open("https://github.com/rafael-farsura", "_blank")
            }
          >
            <Github className="mr-2 h-5 w-5 group-hover:animate-spin" />
            GitHub
          </Button>
        </div>

        {/* Projetos */}
        <div id="projetos" className="pt-10 border-t border-muted">
          <h2 className="text-3xl font-heading mb-10 animate-pulse">
            Projetos em Destaque
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
            {[
              {
                title: "Instituto Aion do Brasil",
                img: "/Images/aion-logo.png",
                desc: "Aion Bank (backend) com microserviços e integrações com Asaas e Stripe; projeto TOKIZ de tokenização RWA (RSK, Solidity, ERC-20, ERC-3643, ERC-1400).",
                link: "https://institutoaionbrasil.com/",
              },
              {
                title: "Asaas Gateway API",
                img: "/Images/logo-asaas.png",
                desc: "Microserviço corporativo: autenticação segura, controle de tokens, pagamentos PIX/cartão e monitoramento (NestJS, PostgreSQL, Grafana, Prometheus).",
                link: "https://github.com/Rafael-Farsura/asaas-gateway-api",
              },
              {
                title: "Coinverting API",
                img: "/Images/coinverting-logo.png",
                desc: "Conversão de moedas e simulação de taxas financeiras (NestJS, TypeORM, PostgreSQL, Docker), com cache e testes de performance.",
                link: "https://github.com/Rafael-Farsura/challenge-bravo/tree/coinverting_Api",
              },
              {
                title: "Tokiz",
                img: "/Images/placeholder.png",
                desc: "Plataforma de tokenização de ativos reais (RWA) em RSK, com auditoria on-chain e integração a gateways de pagamento e BaaS.",
                link: "https://institutoaionbrasil.com/",
              },
              {
                title: "Emprego Social TISL",
                img: "/Images/placeholder.png",
                desc: "Plataforma de vagas (React + Node.js + Prisma + PostgreSQL), CI/CD no GitHub Actions e deploy no GCP (Docker, Terraform, Helm).",
                link: "https://github.com/Rafael-Farsura",
              },
              {
                title: "Java RBAC API",
                img: "/Images/rbac-logo.png",
                desc: "API de controle de acesso e autenticação (Spring Boot + JWT + PostgreSQL) para perfis e permissões.",
                link: "https://github.com/Rafael-Farsura/java.rbac-api",
              },

            ].map((project) => (
              <Card
                key={project.title}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between max-w-sm"
                onClick={() => window.open(project.link, "_blank")}
              >
                <CardHeader>
                  <Image
                    alt={project.title}
                    src={project.img}
                    width={400}
                    height={200}
                    className="rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <CardTitle className="mt-4">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.desc}</p>
                </CardContent>
                <div className="flex justify-center pb-6">
                  <Button
                    size="sm"
                    variant="outline"
                    className="group text-black hover:bg-gradient-to-bl hover:from-slate-700 hover:to-orange-600 hover:text-white hover:animate-pulse"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:animate-spin" />
                    GitHub
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Experiência */}
        <div className="pt-10 border-t border-muted">
          <h2 className="text-3xl font-heading mb-10 animate-pulse">
            Experiência Profissional
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-left">
              <CardHeader>
                <CardTitle className="font-heading">Instituto Aion do Brasil — IT Manager & Full Stack Developer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Mai/2025 – Atual</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Monorepo backend (microserviços) com NestJS, Prisma e PostgreSQL.</li>
                  <li>Gateways (OpenResty/Nginx + Lua), tokens RSA/JWT, auditoria.</li>
                  <li>Integrações Asaas e Stripe (PIX, cartões, boletos, split).</li>
                  <li>Projeto TOKIZ (RSK, Solidity, ERC-20/3643/3400, KMS).</li>
                  <li>CI/CD com GitHub Actions, observabilidade com Grafana/Prometheus.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-left">
              <CardHeader>
                <CardTitle className="font-heading">Deep Seed Solutions — Software Developer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Nov/2022 – Fev/2024</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Sistemas científicos/industriais para energia (FLOCO IA, Karoon JIP).</li>
                  <li>C++/Qt e Node.js para integração CAD ↔ backend e visualização 3D.</li>
                  <li>Automação de testes e suporte à infraestrutura.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-left">
              <CardHeader>
                <CardTitle className="font-heading">Iventou — Full Stack Developer (Freelance)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Ago/2024 – Set/2024</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>APIs RESTful e interfaces Next.js para gestão de eventos.</li>
                  <li>Integração com pagamentos, OAuth2 e Docker.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-left">
              <CardHeader>
                <CardTitle className="font-heading">CELO Blockchain — Pesquisador Blockchain (Freelance)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Jul/2024 – Out/2024</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Pesquisa sobre stablecoins e liquidez na AL; protótipos em Node.js.</li>
                  <li>Dashboards TradingView.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
