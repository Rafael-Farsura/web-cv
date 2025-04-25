"use client";

import {
  Code,
  Blocks,
  Database,
  ListTodo,
  FileText,
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
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-background">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-heading bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent animate-pulse">
            Full Stack Developer
          </h1>
          <p className="text-xl text-muted-foreground hover:animate-bounce">
            Especializado em Nest.js e Blockchain
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <Code className="h-5 w-5 " />
                <p className="bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent animate-pulse">
                  Desenvolvimento Web
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                Construo aplicações web robustas e escaláveis utilizando as
                melhores práticas e tecnologias modernas.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  Nest.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  Node.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  React
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <Blocks className="h-5 w-5" />
                <p className="bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent animate-pulse">
                  Blockchain
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                Desenvolvimento de smart contracts e aplicações descentralizadas
                com foco em segurança e eficiência.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  Solidity
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  Web3.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  Ethereum
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  DApps
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <Database className="h-5 w-5" />
                <p className="bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent animate-pulse">
                  Banco de Dados
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                Projeto e gerencio bancos de dados relacionais com MySQL e
                PostgreSQL, garantindo performance, segurança e escalabilidade.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  MySQL
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  PostgreSQL
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  SQL
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  TypeORM
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  Modelagem
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <ListTodo className="h-5 w-5" />
                <p className="bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent animate-pulse">
                  Metodologias Ágeis
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                Aplico metodologias ágeis para otimizar processos de
                desenvolvimento, aumentar produtividade e entregar valor de
                forma consistente.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  Scrum
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  Kanban
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  Sprint Planning
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  Daily Standup
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 transition-colors"
                >
                  Retrospectiva
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <Button
            size="lg"
            variant="default"
            className="group bg-slate-500 text-white hover:bg-gradient-to-tr
            hover:from-blue-500 hover:to-gray-700 hover:text-white hover:animate-pulse"
            onClick={() =>
              window.open("https://linkedin.com/in/rafaelfarsura", "_blank")
            }
          >
            <FileText className="mr-2 h-5 w-5 group-hover:animate-bounce " />
            Ver Currículo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group text-black hover:bg-gradient-to-bl
            hover:from-slate-700 hover:to-orange-600 hover:text-white hover:animate-pulse"
            onClick={() =>
              window.open("https://github.com/rafael-farsura", "_blank")
            }
          >
            <Github className="mr-2 h-5 w-5 group-hover:animate-spin transition-transform duration-300" />
            GitHub
          </Button>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-heading mb-4 animate-pulse">
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <Card
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => window.open(
                  "https://github.com/Rafael-Farsura/challenge-bravo/tree/coinverting_Api", 
                  "_blank"
                )
              }>

              <CardHeader>
                <Image
                  alt="Project preview"
                  src="/Images/placeholder.png"
                  width={400}
                  height={200}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <CardTitle className="mt-4">Coinverting API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Projeto de conversão de moedas reais e ficticias em tempo real
                  com lastro em USD.
                </p>
              </CardContent>
            </Card>
            <Card 
            className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full"
            
            onClick={() => window.open("https://github.com/Rafael-Farsura/TaskPay", "_blank")}>
              <CardHeader>
                <Image
                  alt="Project preview"
                  src="/Images/task-pay-logo.png"
                  width={600}
                  height={300}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <CardTitle className="mt-4">Task Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                TaskPay é uma plataforma descentralizada que conecta freelancers a contratantes com pagamentos automatizados via Smart Contracts. Cada etapa (milestone) de um projeto é liberada somente após aprovação, oferecendo segurança e previsibilidade para ambas as partes.      
                </p>
              </CardContent>
            </Card>

            {/* <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Image
                  alt="Project preview"
                  src="/Images/placeholder.png"
                  width={400}
                  height={200}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <CardTitle className="mt-4">NFT Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Marketplace de NFTs com integração blockchain
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
}
