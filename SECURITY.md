# Protección Anti-Bot para Emails

Este proyecto implementa protección contra bots de web scraping para proteger las direcciones de correo electrónico.

## 🔒 Cómo Funciona

### 1. **Ofuscación de Email**
Los emails están codificados usando Base64 y reversión de caracteres. Esto significa que:
- El email **NO** aparece en el HTML fuente de la página
- Solo se decodifica en el navegador del usuario (client-side)
- Los bots simples no pueden extraer el email fácilmente

### 2. **Componentes de Protección**

#### `ObfuscatedEmail`
Componente que decodifica y muestra un email de forma segura:
```tsx
<ObfuscatedEmail
  encodedLocal="6h2Yz1GdyVmYsF2cpVHb"
  encodedDomain="t92YuwWah12Z"
  showEmail={true}
/>
```

#### `ObfuscatedEmailButton`
Componente para botones con enlaces mailto protegidos:
```tsx
<ObfuscatedEmailButton
  encodedLocal="6h2Yz1GdyVmYsF2cpVHb"
  encodedDomain="t92YuwWah12Z"
>
  Send Email
</ObfuscatedEmailButton>
```

## 🛡️ Niveles de Protección

1. **Ofuscación Base64 + Reversión**: El email está codificado y revertido
2. **Decodificación Client-Side**: Solo se decodifica en el navegador
3. **Sin Email en HTML**: El HTML fuente no contiene el email en texto plano

## ⚠️ Limitaciones

Esta protección es efectiva contra:
- ✅ Bots simples de scraping
- ✅ Crawlers básicos
- ✅ Scripts automatizados simples

**NO protege contra:**
- ❌ Bots avanzados que ejecutan JavaScript
- ❌ Bots que analizan el DOM renderizado
- ❌ Ataques dirigidos específicamente

## 🔄 Actualizar el Email

Si necesitas cambiar el email protegido:

1. Genera los valores codificados:
```bash
node -e "const email = 'tu-email@ejemplo.com'; const [local, domain] = email.split('@'); const encode = (str) => Buffer.from(str).toString('base64').split('').reverse().join(''); console.log('Local:', encode(local)); console.log('Domain:', encode(domain));"
```

2. Actualiza las constantes en:
   - `components/contact.tsx`
   - `components/sidebar-links.tsx`

## 📝 Notas Adicionales

Para mayor protección, considera:
- Implementar un formulario de contacto con backend
- Usar servicios de terceros (como Formspree, EmailJS)
- Agregar CAPTCHA para formularios
- Implementar rate limiting en el servidor

