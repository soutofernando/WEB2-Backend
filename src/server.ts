import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world!");
});

// Rotas para alunos
app.get("/alunos", (req: Request, res: Response) => {
  
    try {
        res.status(200).send("Obter todos os alunos");
    } catch (error) {
        res.status(500).send("Erro ao obter alunos");
    }
});

app.post("/alunos", (req: Request, res: Response) => {
    try {
        res.status(201).send("Criar um novo aluno");
    } catch (error) {
        res.status(400).send("Erro ao criar aluno");
    }
});

app.get("/alunos/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("ID de aluno inválido");
        }
        res.status(200).send(`Obter aluno com ID ${id}`);
    } catch (error) {
        res.status(404).send("Aluno não encontrado");
    }
});

app.put("/alunos/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("ID de aluno inválido");
        }
        res.status(200).send(`Atualizar aluno com ID ${id}`);
    } catch (error) {
        res.status(500).send("Erro ao atualizar aluno");
    }
});

app.delete("/alunos/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("ID de aluno inválido");
        }
        res.status(200).send(`Deletar aluno com ID ${id}`);
    } catch (error) {
        res.status(500).send("Erro ao deletar aluno");
    }
});

// Rotas para equipamentos
app.get("/equipamentos", (req: Request, res: Response) => {
    try {
        res.status(200).send("Obter todos os equipamentos");
    } catch (error) {
        res.status(500).send("Erro ao obter equipamentos");
    }
});

app.post("/equipamentos", (req: Request, res: Response) => {
    try {
        res.status(201).send("Criar um novo equipamento");
    } catch (error) {
        res.status(400).send("Erro ao criar equipamento");
    }
});

app.get("/equipamentos/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("ID de equipamento inválido");
        }
        res.status(200).send(`Obter equipamento com ID ${id}`);
    } catch (error) {
        res.status(404).send("Equipamento não encontrado");
    }
});

app.put("/equipamentos/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("ID de equipamento inválido");
        }
        res.status(200).send(`Atualizar equipamento com ID ${id}`);
    } catch (error) {
        res.status(500).send("Erro ao atualizar equipamento");
    }
});

app.delete("/equipamentos/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("ID de equipamento inválido");
        }
        res.status(200).send(`Deletar equipamento com ID ${id}`);
    } catch (error) {
        res.status(500).send("Erro ao deletar equipamento");
    }
});

// Rotas para administradores
app.get("/admins", (req: Request, res: Response) => {
    try {
        res.status(200).send("Obter todos os administradores");
    } catch (error) {
        res.status(500).send("Erro ao obter administradores");
    }
});

app.post("/admins", (req: Request, res: Response) => {
    try {
        res.status(201).send("Criar um novo administrador");
    } catch (error) {
        res.status(400).send("Erro ao criar administrador");
    }
});

app.get("/admins/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("ID de administrador inválido");
        }
        res.status(200).send(`Obter administrador com ID ${id}`);
    } catch (error) {
        res.status(404).send("Administrador não encontrado");
    }
});

app.put("/admins/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("ID de administrador inválido");
        }
        res.status(200).send(`Atualizar administrador com ID ${id}`);
    } catch (error) {
        res.status(500).send("Erro ao atualizar administrador");
    }
});

app.delete("/admins/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("ID de administrador inválido");
        }
        res.status(200).send(`Deletar administrador com ID ${id}`);
    } catch (error) {
        res.status(500).send("Erro ao deletar administrador");
    }
});

// Rotas para horários de uso dos equipamentos
app.get("/horarios", (req: Request, res: Response) => {
    try {
        res.status(200).send("Obter todos os horários");
    } catch (error) {
        res.status(500).send("Erro ao obter horários");
    }
});

app.post("/horarios", (req: Request, res: Response) => {
    try {
        res.status(201).send("Criar um novo horário");
    } catch (error) {
        res.status(400).send("Erro ao criar horário");
    }
});

app.get("/horarios/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("ID de horário inválido");
        }
        res.status(200).send(`Obter horário com ID ${id}`);
    } catch (error) {
        res.status(404).send("Horário não encontrado");
    }
});

app.put("/horarios/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("ID de horário inválido");
        }
        res.status(200).send(`Atualizar horário com ID ${id}`);
    } catch (error) {
        res.status(500).send("Erro ao atualizar horário");
    }
});

app.delete("/horarios/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send("ID de horário inválido");
        }
        res.status(200).send(`Deletar horário com ID ${id}`);
    } catch (error) {
        res.status(500).send("Erro ao deletar horário");
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});