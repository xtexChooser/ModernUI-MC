#version 450 core

layout(location = 0) uniform sampler2D u_Sampler;

flat in vec4 f_Color;
smooth in vec2 f_TexCoord;

layout(location = 0) out vec4 fragColor;

void main() {
    vec4 samp = texture(u_Sampler, f_TexCoord, -0.225);
    samp.rgb *= samp.a; // premul for bitmap
    fragColor = samp * f_Color; // modulate
}