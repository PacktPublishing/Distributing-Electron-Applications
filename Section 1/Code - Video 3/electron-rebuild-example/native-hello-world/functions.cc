#include "functions.h"

NAN_METHOD(GetString) {
    info.GetReturnValue().Set(Nan::New("Hello world from native add-on").ToLocalChecked());
}
