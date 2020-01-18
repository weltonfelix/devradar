## Android Defaults
### NavBar Android
  Para trocar a navbar, adicione no app.json o seguinte.
    "androidNavigationBar": {
        "visible": true,
        "barStyle": "light-content",
        "backgroundColor": "#000000"
    }

  Esses são os valores padrões.

### Header Android
  Por padrão, a posição do título da header é na esquerda, para alterar, use nas `NavigationOptions`:
    headerTitleAlign: 'center',

A cor padrão do bg da view é #F1F1F1