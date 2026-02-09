# Todo App

Un'applicazione moderna per la gestione delle attività (todo) costruita con React, TypeScript e Vite. L'app offre un'interfaccia intuitiva per organizzare le proprie attività con supporto per tag personalizzati e filtri avanzati.

## 🚀 Funzionalità

- ✅ **Gestione Todo**: Aggiungi, completa ed elimina attività
- 🏷️ **Sistema di Tag**: Categorizza i tuoi todo con tag personalizzati
- 🔍 **Filtri Avanzati**: 
  - Filtra per stato: Tutti, Attivi, Completati
  - Filtra per tag specifico
- 🗑️ **Pulizia Rapida**: Elimina tutti i todo completati con un solo click
- 🎨 **Design Moderno**: Interfaccia utente pulita e responsive con Tailwind CSS

## 🛠️ Tecnologie Utilizzate

- **React 19.2.0** - Libreria UI moderna
- **TypeScript** - Tipizzazione statica per maggiore sicurezza del codice
- **Vite 7.3.1** - Build tool veloce e moderno
- **Tailwind CSS** - Framework CSS utility-first per lo styling
- **ESLint** - Linter per mantenere il codice pulito e consistente

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:

- **Node.js** (versione 18 o superiore)
- **npm** o **yarn** o **pnpm**

## 🚀 Installazione

1. **Clona il repository** (o naviga nella cartella del progetto):
   ```bash
   cd todoApp
   ```

2. **Installa le dipendenze**:
   ```bash
   npm install
   ```

## 💻 Utilizzo

### Avviare l'applicazione in modalità sviluppo

```bash
npm run dev
```

L'applicazione sarà disponibile all'indirizzo `http://localhost:5173` (o un'altra porta se quella è occupata).

### Build per produzione

```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `dist/`.

### Anteprima della build di produzione

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Struttura del Progetto

```
todoApp/
├── public/              # File statici pubblici
├── src/
│   ├── components/      # Componenti React
│   │   ├── FilterBar.tsx      # Barra filtri per stato
│   │   ├── FilterButton.tsx   # Pulsante filtro riutilizzabile
│   │   ├── TagFilter.tsx      # Filtro per tag
│   │   ├── TodoItem.tsx       # Singolo elemento todo
│   │   └── TodoList.tsx       # Lista di todo
│   ├── types/          # Definizioni TypeScript
│   │   └── todo.ts            # Tipo Todo
│   ├── App.tsx         # Componente principale
│   ├── main.tsx        # Entry point dell'applicazione
│   └── index.css       # Stili globali
├── index.html          # Template HTML
├── package.json        # Dipendenze e script
├── tsconfig.json       # Configurazione TypeScript
└── vite.config.ts      # Configurazione Vite
```

## 🎯 Come Usare l'App

### Aggiungere un Todo

1. Inserisci il testo del todo nel campo "Add a new todo"
2. (Opzionale) Seleziona un tag esistente dal menu a tendina
3. Clicca sul pulsante "Add"

### Aggiungere un Nuovo Tag

1. Inserisci il nome del tag nel campo "Add new tag option"
2. Clicca sul pulsante "Add tag"
3. Il nuovo tag sarà disponibile per essere assegnato ai todo

### Filtrare i Todo

- **Per Stato**: Usa i pulsanti "All", "Active", "Completed" nella barra filtri
- **Per Tag**: Clicca su un tag specifico nella sezione Tag Filter per vedere solo i todo con quel tag
- **Rimuovere Filtro Tag**: Clicca su "All tags" per vedere tutti i todo

### Completare un Todo

Clicca sulla checkbox accanto al testo del todo per segnarlo come completato.

### Eliminare i Todo Completati

Clicca sul pulsante "Elimina completati" per rimuovere tutti i todo completati dalla lista.

## 📝 Note

- I todo vengono salvati solo in memoria locale (state React). Al ricaricamento della pagina, i dati vengono persi.
- Per persistenza dei dati, considera l'integrazione con localStorage o un backend.

## 🤝 Contribuire

Le pull request sono benvenute! Per cambiamenti importanti, apri prima una issue per discutere cosa vorresti cambiare.

## 📄 Licenza

Questo progetto è privato e non ha una licenza pubblica.
