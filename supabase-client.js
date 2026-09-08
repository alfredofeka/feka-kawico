// ============================================================
// Configuração central do Supabase — FEKA KAWIÇO
// Importar SEMPRE depois do SDK do Supabase, em todas as páginas:
//
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//   <script src="supabase-client.js"></script>
//
// Projeto ativo: FEKA KAWIÇO (Ireland) — o projeto antigo (Paris)
// ficou inativo e já não é usado.
// ============================================================

const SUPABASE_URL = 'https://xewvmdhdahpawllxecfe.supabase.co';
const SUPABASE_KEY = 'sb_publishable_rWC_Uh5e6mT0aMAn3hSTrQ_7oACjDul';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
