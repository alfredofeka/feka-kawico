// ============================================================
// Configuração central do Supabase — FEKA KAWIÇO
// Importar SEMPRE depois do SDK do Supabase, em todas as páginas:
//
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//   <script src="supabase-client.js"></script>
//
// A partir daí, qualquer página pode usar a variável `supabaseClient`.
// A chave abaixo é a "publishable key" — é pública por natureza
// (visível no código do site) e segura de expor. A segurança real
// vem das políticas de Row Level Security definidas na base de dados.
// ============================================================

const SUPABASE_URL = 'https://oeulptvlwqtprobeaelm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_gbVLH0l_dMSJm8gYdGMOkw_uQNYFEHQ';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
