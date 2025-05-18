# AsistoYA App

Aplicación móvil React Native (TypeScript) para AsistoYA.

## Estructura de carpetas

- `src/components`: Componentes reutilizables
- `src/screens`: Pantallas principales (Login, Home)
- `src/services`: Servicios (Firebase, Twilio, sesión)
- `src/hooks`: Hooks personalizados
- `src/navigation`: Navegación con React Navigation
- `src/types`: Tipos globales

## Instalación de dependencias

```sh
npm install
```

### Dependencias recomendadas

- `@react-navigation/native` y stacks
- `@react-native-firebase/app` y `@react-native-firebase/messaging`
- `@react-native-async-storage/async-storage`

Instala con:

```sh
npm install @react-navigation/native @react-navigation/stack
npm install @react-native-firebase/app @react-native-firebase/messaging
npm install @react-native-async-storage/async-storage
```

## Configuración de Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
2. Descarga `google-services.json` (Android) y/o `GoogleService-Info.plist` (iOS) y colócalos en las carpetas correspondientes.
3. Habilita Cloud Messaging.

## Configuración de Twilio (SMS)

1. Crea una cuenta en [Twilio](https://www.twilio.com/).
2. Obtén tus credenciales (Account SID, Auth Token, número de teléfono).
3. Configura tu backend para exponer endpoints de envío/recepción de SMS.

## Ejecución en Android/iOS

```sh
npx react-native run-android
npx react-native run-ios
```

## Notas

- Ajusta las URLs de API y credenciales en los servicios según tu backend.
- El login es por código de sesión generado en la app de escritorio.
- El historial de notificaciones incluye push (Firebase) y SMS (Twilio).

## Funcionalidad de Perfil

La aplicación ahora incluye una nueva funcionalidad para mostrar la información del perfil del usuario en la pantalla de inicio.

### Componente Profile

El componente `Profile` se encuentra en `src/components/Profile.tsx` y se utiliza para mostrar la información del perfil del usuario. Recibe las siguientes props:

- `name`: Nombre del usuario
- `email`: Email del usuario
- `phone`: Teléfono del usuario

### Uso del Componente Profile

El componente `Profile` se utiliza en la pantalla de inicio (`HomeScreen`) para mostrar la información del perfil del usuario. La pantalla de inicio se encuentra en `src/screens/HomeScreen.tsx`.

### Hook useProfile

El hook `useProfile` se encuentra en `src/hooks/useProfile.ts` y se utiliza para obtener y gestionar los datos del perfil del usuario. Este hook maneja los estados de `profile`, `loading` y `error`.

### Instrucciones para Obtener y Mostrar Datos del Perfil

1. El `AppNavigator` utiliza el hook `useProfile` para obtener los datos del perfil del usuario.
2. Los datos del perfil se pasan como props al componente `HomeScreen`.
3. El componente `HomeScreen` utiliza el componente `Profile` para mostrar la información del perfil del usuario.
