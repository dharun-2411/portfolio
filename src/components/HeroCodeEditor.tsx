import { ReactNode, useState } from 'react';
import { Play, Code2, Terminal, Circle, FileJson, Coffee, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TabFile {
  name: string;
  lang: string;
  icon: ReactNode;
  code: string;
  output: string[];
}

export default function HeroCodeEditor() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const files: TabFile[] = [
    {
      name: 'ResaleEMart.js',
      lang: 'JavaScript',
      icon: <FileJson className="w-4 h-4 text-yellow-500" />,
      code: `// Resale E-mart - Second-hand computer accessories web app
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

const dbConfig = {
  host: 'localhost',
  user: 'dharun_admin',
  database: 'resale_emart_db'
};

// Retrieve active accessories listing
app.get('/api/listings', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.query(
      'SELECT * FROM listings WHERE status = "active" ORDER BY created_at DESC'
    );
    res.json({ success: true, listings: rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
      output: [
        '🚀 Launching Resale E-mart backend engine...',
        '⚙️ Connection established successfully with database: resale_emart_db',
        '📦 Syncing catalog: Loaded 14 second-hand accessories listings.',
        '🟢 Server listening at http://localhost:8080/api/listings',
      ],
    },
    {
      name: 'FitBuddy.java',
      lang: 'Java',
      icon: <Coffee className="w-4 h-4 text-orange-500" />,
      code: `// FitBuddy - Mobile app with custom API integrations
public class FitBuddy {
    private String userProfile;
    private int dailyGoalCalories = 2400;

    public static void main(String[] args) {
        FitBuddy engine = new FitBuddy("Dharun J");
        engine.fetchWorkoutRoutines();
    }

    public void fetchWorkoutRoutines() {
        System.out.println("Connecting to wellness APIs...");
        // Retrieve curated training logs from endpoints
        boolean success = APIConnector.syncProgress();
        if (success) {
            System.out.println("Routines updated. Daily Target: " + dailyGoalCalories + " kcal");
        }
    }
}`,
      output: [
        '☕ Compiling FitBuddy.java...',
        '☕ Running java FitBuddy',
        '⚡ Initializing FitBuddy Wellness Engine v1.2...',
        '🌐 Connecting to wellness APIs... SUCCESS',
        '📊 Synchronized streak: 5 consecutive days. Daily Target: 2400 kcal',
      ],
    },
    {
      name: 'Smartz.py',
      lang: 'Python',
      icon: <Award className="w-4 h-4 text-blue-400" />,
      code: `# Smartz - Financial planning and budgeting analyzer
import numpy as np

def forecast_savings(monthly_income, current_expenses, target_reduction=0.15):
    # Analyze optimal allocation models
    expenses = np.array(current_expenses)
    reduced_expenses = expenses * (1.0 - target_reduction)
    
    projected_savings = monthly_income - np.sum(reduced_expenses)
    return round(projected_savings, 2)

# Execution block
net_income = 45000
monthly_outflows = [12000, 3000, 4500, 8000] # rent, food, transport, bills
savings = forecast_savings(net_income, monthly_outflows)
print(f"Projected Monthly Savings with Optimization: ₹{savings}")`,
      output: [
        '🐍 Running python3 smartz_analytics.py...',
        '📈 Model analysis loaded successfully: Numpy libraries mapped.',
        '🎯 Optimization simulation targeted at 15.0% cost reduction.',
        '💡 Projected Monthly Savings with Optimization: ₹19825.0',
      ],
    },
  ];

  const handleRunCode = () => {
    setIsRunning(true);
    setConsoleLogs(['🔄 Compiling and executing...']);
    
    // Simulate line-by-line terminal printing
    let currentLogIndex = 0;
    const logsToPrint = files[activeTab].output;
    
    const interval = setInterval(() => {
      if (currentLogIndex < logsToPrint.length) {
        setConsoleLogs(prev => [...prev, logsToPrint[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 450);
  };

  return (
    <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/60 select-none">
        {/* Mock Mac Os controls */}
        <div className="flex items-center space-x-2">
          <Circle className="w-3 h-3 text-red-500 fill-current opacity-80" />
          <Circle className="w-3 h-3 text-yellow-500 fill-current opacity-80" />
          <Circle className="w-3 h-3 text-green-500 fill-current opacity-80" />
          <span className="ml-4 text-slate-500 text-[11px] font-sans font-medium hidden sm:inline">vscode — DharunJ_Portfolio</span>
        </div>
        
        {/* Play action */}
        <button
          onClick={handleRunCode}
          disabled={isRunning}
          className={`flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 active:scale-95 transition-all cursor-pointer ${
            isRunning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          title="Run Code"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span className="font-sans font-semibold text-[11px]">Run Code</span>
        </button>
      </div>

      {/* Tabs list */}
      <div className="flex bg-slate-950/40 border-b border-slate-800/40 overflow-x-auto scrollbar-none">
        {files.map((file, idx) => (
          <button
            key={file.name}
            onClick={() => {
              setActiveTab(idx);
              setConsoleLogs([]);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 border-r border-slate-800/50 cursor-pointer transition-colors ${
              activeTab === idx
                ? 'bg-slate-900 text-white border-t-2 border-t-indigo-500 font-semibold'
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/40'
            }`}
          >
            {file.icon}
            <span>{file.name}</span>
          </button>
        ))}
      </div>

      {/* Code Area */}
      <div className="relative p-4 md:p-6 min-h-[220px] max-h-[300px] overflow-y-auto bg-slate-900">
        <div className="absolute right-3 top-3 text-[10px] text-slate-600 font-sans border border-slate-800 px-1.5 py-0.5 rounded select-none">
          {files[activeTab].lang}
        </div>
        <pre className="leading-relaxed text-left text-slate-300 select-text whitespace-pre-wrap">
          <code>
            {files[activeTab].code.split('\n').map((line, i) => (
              <div key={i} className="flex">
                <span className="w-6 text-slate-600 text-right pr-3 select-none text-[10px]">{i + 1}</span>
                <span className="flex-1">
                  {/* Basic highlights for styling */}
                  {line.startsWith('//') || line.startsWith('#') ? (
                    <span className="text-slate-500 italic">{line}</span>
                  ) : (
                    line
                      .replace(/(const|require|public|class|static|void|import|def|return|private|int|new)/g, '<span class="text-indigo-400 font-semibold">$1</span>')
                      .replace(/("[^"]*")/g, '<span class="text-emerald-400">$1</span>')
                      .replace(/(System\.out\.println|print|require|mysql)/g, '<span class="text-blue-400">$1</span>')
                      .replace(/([0-9]+)/g, '<span class="text-amber-400">$1</span>')
                      .split(/(<[^>]*>[^<]*<\/[^>]*>)/g)
                      .map((part, k) => {
                        if (part.startsWith('<')) {
                          return <span key={k} dangerouslySetInnerHTML={{ __html: part }} />;
                        }
                        return part;
                      })
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Terminal Area */}
      <div className="border-t border-slate-800 bg-slate-950 p-4">
        <div className="flex items-center gap-2 mb-2 text-slate-500 text-[10px] font-sans font-medium uppercase tracking-wider select-none">
          <Terminal className="w-3.5 h-3.5 text-indigo-400" />
          <span>Output Terminal</span>
        </div>
        <div className="min-h-[70px] max-h-[120px] overflow-y-auto space-y-1 font-mono text-[11px] text-slate-400 leading-relaxed text-left">
          {consoleLogs.length === 0 ? (
            <span className="text-slate-600 italic">Click "Run Code" in the upper right to execute active script.</span>
          ) : (
            consoleLogs.map((log, index) => (
              <div key={index} className="flex gap-1 items-start">
                <span className="text-indigo-500 select-none">&gt;</span>
                <span className={log.includes('🟢') || log.includes('SUCCESS') ? 'text-emerald-400 font-semibold' : ''}>
                  {log}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
